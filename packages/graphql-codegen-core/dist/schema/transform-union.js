(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../debugging", "../utils/get-directives"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const debugging_1 = require("../debugging");
    const get_directives_1 = require("../utils/get-directives");
    function transformUnion(schema, union) {
        debugging_1.debugLog(`[transformUnion] transformed union ${union.name}`);
        const directives = get_directives_1.getDirectives(schema, union);
        return {
            name: union.name,
            description: union.description || '',
            possibleTypes: union.getTypes().map(type => type.name),
            directives,
            usesDirectives: Object.keys(directives).length > 0,
        };
    }
    exports.transformUnion = transformUnion;
});
//# sourceMappingURL=transform-union.js.map