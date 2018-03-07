(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./transform-fragment-document", "graphql/language/kinds", "./transform-operation", "../debugging"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const transform_fragment_document_1 = require("./transform-fragment-document");
    const kinds_1 = require("graphql/language/kinds");
    const transform_operation_1 = require("./transform-operation");
    const debugging_1 = require("../debugging");
    const { OPERATION_DEFINITION, FRAGMENT_DEFINITION } = kinds_1.Kind;
    function transformDocument(schema, documentNode) {
        const result = {
            fragments: [],
            operations: [],
            hasFragments: false,
            hasOperations: false,
        };
        const definitions = (documentNode.definitions || []);
        debugging_1.debugLog(`[transformDocument] transforming total of ${definitions.length} definitions...`);
        definitions.forEach((definitionNode) => {
            if (definitionNode.kind === OPERATION_DEFINITION) {
                result.operations.push(transform_operation_1.transformOperation(schema, definitionNode));
            }
            else if (definitionNode.kind === FRAGMENT_DEFINITION) {
                result.fragments.push(transform_fragment_document_1.transformFragment(schema, definitionNode));
            }
            else {
                console.log(`WARNING: It seems like you provided a GraphQL schema instead of GraphQL document: `);
                console.log(definitionNode);
            }
        });
        result.hasFragments = result.fragments.length > 0;
        result.hasOperations = result.operations.length > 0;
        return result;
    }
    exports.transformDocument = transformDocument;
});
//# sourceMappingURL=transform-document.js.map