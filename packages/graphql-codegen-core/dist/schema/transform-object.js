(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql", "./transform-fields", "../debugging", "../utils/get-directives"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const graphql_1 = require("graphql");
    const transform_fields_1 = require("./transform-fields");
    const debugging_1 = require("../debugging");
    const get_directives_1 = require("../utils/get-directives");
    function transformGraphQLObject(schema, object) {
        debugging_1.debugLog(`[transformGraphQLObject] transforming type ${object.name}`);
        const resolvedFields = transform_fields_1.resolveFields(schema, object.getFields());
        const resolvedInterfaces = object instanceof graphql_1.GraphQLObjectType ? object.getInterfaces().map(inf => inf.name) : [];
        const directives = get_directives_1.getDirectives(schema, object);
        return {
            name: object.name,
            description: object.description || '',
            fields: resolvedFields,
            interfaces: resolvedInterfaces,
            isInputType: object instanceof graphql_1.GraphQLInputObjectType,
            hasFields: resolvedFields.length > 0,
            hasInterfaces: resolvedInterfaces.length > 0,
            directives,
            usesDirectives: Object.keys(directives).length > 0,
        };
    }
    exports.transformGraphQLObject = transformGraphQLObject;
});
//# sourceMappingURL=transform-object.js.map