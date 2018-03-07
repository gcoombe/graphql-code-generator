"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("../../graphql-codegen-core/dist");
function cleanTemplateComments(template, debugFilename) {
    if (debugFilename === void 0) { debugFilename = ''; }
    dist_1.debugLog("[cleanTemplateComments] called, looking for magic comments in " + debugFilename + "...");
    if (template.match(/\/\*\s*gqlgen/ig)) {
        dist_1.debugLog("[cleanTemplateComments] Found magic comment 'gqlgen' in template " + debugFilename + "...", template);
        var result = template
            .replace(/.*({{.*}})/ig, function (all, group) {
            if (all.toLowerCase().includes('gqlgen')) {
                return all;
            }
            return all.replace(/{{/g, '\\{{');
        })
            .replace(/\/\*\s*gqlgen\s*(.*?)\s*\*\//gi, function (all, group) { return group ? group : all; });
        dist_1.debugLog("[cleanTemplateComments] template " + debugFilename + " modified, result is: ", template);
        return result;
    }
    dist_1.debugLog("[cleanTemplateComments] " + debugFilename + " does not contains any magic comments, skipping...");
    return template;
}
exports.cleanTemplateComments = cleanTemplateComments;
//# sourceMappingURL=clean-template.js.map