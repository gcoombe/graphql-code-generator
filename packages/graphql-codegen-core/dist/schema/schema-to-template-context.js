(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql", "../utils/object-map-to-array", "./transform-object", "./transform-enum", "./transform-union", "./transform-interface", "./transform-scalar", "../debugging", "./transform-directives", "../utils/get-directives"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const graphql_1 = require("graphql");
    const object_map_to_array_1 = require("../utils/object-map-to-array");
    const transform_object_1 = require("./transform-object");
    const transform_enum_1 = require("./transform-enum");
    const transform_union_1 = require("./transform-union");
    const transform_interface_1 = require("./transform-interface");
    const transform_scalar_1 = require("./transform-scalar");
    const debugging_1 = require("../debugging");
    const transform_directives_1 = require("./transform-directives");
    const get_directives_1 = require("../utils/get-directives");
    const GRAPHQL_PRIMITIVES = ['String', 'Int', 'Boolean', 'ID', 'Float'];
    const clearTypes = (typesMap) => Object.keys(typesMap)
        .filter(key => !GRAPHQL_PRIMITIVES.includes(key) && !key.startsWith('__'))
        .reduce((obj, key) => {
        obj[key] = typesMap[key];
        return obj;
    }, {});
    function schemaToTemplateContext(schema) {
        debugging_1.debugLog('[schemaToTemplateContext] started...');
        const directives = get_directives_1.getDirectives(schema, schema);
        const result = {
            types: [],
            inputTypes: [],
            enums: [],
            unions: [],
            scalars: [],
            interfaces: [],
            definedDirectives: [],
            // Indicators
            hasTypes: false,
            hasInputTypes: false,
            hasEnums: false,
            hasUnions: false,
            hasScalars: false,
            hasInterfaces: false,
            hasDefinedDirectives: false,
            rawSchema: schema,
            directives,
            usesDirectives: Object.keys(directives).length > 0,
        };
        const rawTypesMap = schema.getTypeMap();
        const typesMap = clearTypes(rawTypesMap);
        const typesArray = object_map_to_array_1.objectMapToArray(typesMap);
        debugging_1.debugLog(`[schemaToTemplateContext] Got total of ${typesArray.length} types in the GraphQL schema`);
        typesArray.map((graphQlType) => {
            const actualTypeDef = graphQlType.value;
            if (actualTypeDef instanceof graphql_1.GraphQLObjectType) {
                result.types.push(transform_object_1.transformGraphQLObject(schema, actualTypeDef));
            }
            else if (actualTypeDef instanceof graphql_1.GraphQLInputObjectType) {
                result.inputTypes.push(transform_object_1.transformGraphQLObject(schema, actualTypeDef));
            }
            else if (actualTypeDef instanceof graphql_1.GraphQLEnumType) {
                result.enums.push(transform_enum_1.transformGraphQLEnum(schema, actualTypeDef));
            }
            else if (actualTypeDef instanceof graphql_1.GraphQLUnionType) {
                result.unions.push(transform_union_1.transformUnion(schema, actualTypeDef));
            }
            else if (actualTypeDef instanceof graphql_1.GraphQLInterfaceType) {
                result.interfaces.push(transform_interface_1.transformInterface(schema, actualTypeDef));
            }
            else if (actualTypeDef instanceof graphql_1.GraphQLScalarType) {
                result.scalars.push(transform_scalar_1.transformScalar(schema, actualTypeDef));
            }
            else {
                throw new Error(`Unexpected GraphQL type definition: ${graphQlType.key} (As string: ${String(actualTypeDef)})`);
            }
        });
        result.definedDirectives = transform_directives_1.transformDirectives(schema, schema.getDirectives() || []);
        result.hasTypes = result.types.length > 0;
        result.hasInputTypes = result.inputTypes.length > 0;
        result.hasEnums = result.enums.length > 0;
        result.hasUnions = result.unions.length > 0;
        result.hasScalars = result.scalars.length > 0;
        result.hasInterfaces = result.interfaces.length > 0;
        result.hasDefinedDirectives = result.definedDirectives.length > 0;
        debugging_1.debugLog(`[schemaToTemplateContext] done, results is: `, result);
        return result;
    }
    exports.schemaToTemplateContext = schemaToTemplateContext;
});
//# sourceMappingURL=schema-to-template-context.js.map