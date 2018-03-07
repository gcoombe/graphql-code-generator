(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql", "../schema/resolve-type", "../debugging", "../schema/resolve-type-indicators"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const graphql_1 = require("graphql");
    const resolve_type_1 = require("../schema/resolve-type");
    const debugging_1 = require("../debugging");
    const resolve_type_indicators_1 = require("../schema/resolve-type-indicators");
    function transformVariables(schema, definitionNode) {
        return definitionNode.variableDefinitions.map((variableDefinition) => {
            const typeFromSchema = graphql_1.typeFromAST(schema, variableDefinition.type);
            const resolvedType = resolve_type_1.resolveType(typeFromSchema);
            debugging_1.debugLog(`[transformVariables] transforming variable ${variableDefinition.variable.name.value} of type ${resolvedType.name}`);
            const namedType = graphql_1.getNamedType(typeFromSchema);
            const indicators = resolve_type_indicators_1.resolveTypeIndicators(namedType);
            return {
                name: variableDefinition.variable.name.value,
                type: resolvedType.name,
                isArray: resolvedType.isArray,
                isRequired: resolvedType.isRequired,
                isEnum: indicators.isEnum,
                isScalar: indicators.isScalar,
                isInterface: indicators.isInterface,
                isUnion: indicators.isUnion,
                isInputType: indicators.isInputType,
                isType: indicators.isType,
            };
        });
    }
    exports.transformVariables = transformVariables;
});
//# sourceMappingURL=transform-variables.js.map