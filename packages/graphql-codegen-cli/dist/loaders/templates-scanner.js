"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var glob = require("glob");
var fs = require("fs");
var dist_1 = require("../../../graphql-codegen-core/dist");
function scanForTemplatesInPath(dirPath, fileExtensions) {
    var absolutePath = path.resolve(process.cwd(), dirPath);
    var globPattern = absolutePath + "/**/*.@(" + fileExtensions.join('|') + ")";
    dist_1.debugLog("[scanForTemplatesInPath] Scanning for templates using glob pattern: " + globPattern);
    var results = glob.sync(globPattern);
    dist_1.debugLog("[scanForTemplatesInPath] Got results from glob: ", results);
    return results.reduce(function (prev, filePath) {
        prev[filePath] = fs.readFileSync(filePath).toString();
        return prev;
    }, {});
}
exports.scanForTemplatesInPath = scanForTemplatesInPath;
//# sourceMappingURL=templates-scanner.js.map