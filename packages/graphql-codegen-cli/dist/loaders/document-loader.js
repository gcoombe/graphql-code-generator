"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("../../../graphql-codegen-core/dist");
var fs = require("fs");
var path = require("path");
var document_finder_1 = require("../utils/document-finder");
exports.loadFileContent = function (filePath) {
    if (fs.existsSync(filePath)) {
        var fileContent = fs.readFileSync(filePath, 'utf8');
        var fileExt = path.extname(filePath);
        if (fileExt === '.graphql' || fileExt === '.gql') {
            return dist_1.parse(new dist_1.Source(fileContent, filePath));
        }
        var foundDoc = document_finder_1.extractDocumentStringFromCodeFile(fileContent);
        if (foundDoc) {
            return dist_1.parse(new dist_1.Source(foundDoc, filePath));
        }
        else {
            return null;
        }
    }
    else {
        throw new Error("Document file " + filePath + " does not exists!");
    }
};
exports.loadDocumentsSources = function (filePaths) {
    return dist_1.concatAST(filePaths.map(exports.loadFileContent).filter(function (content) { return content; }));
};
//# sourceMappingURL=document-loader.js.map