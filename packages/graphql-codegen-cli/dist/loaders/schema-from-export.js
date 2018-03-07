"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
exports.schemaFromExport = function (file) {
    console.log("Loading GraphQL Introspection from JavaScript ES6 export: " + file + "...");
    return new Promise(function (resolve, reject) {
        var fullPath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file);
        if (fs.existsSync(fullPath)) {
            try {
                var exports_1 = require(fullPath);
                if (exports_1) {
                    var schema = exports_1.default || exports_1.schema;
                    if (schema) {
                        resolve(schema);
                    }
                    else {
                        reject(new Error("Invalid export from export file " + fullPath + ": missing default export or 'schema' export!"));
                    }
                }
                else {
                    reject(new Error("Invalid export from export file " + fullPath + ": empty export!"));
                }
            }
            catch (e) {
                reject(e);
            }
        }
        else {
            reject("Unable to locate introspection from export file: " + fullPath);
        }
    });
};
//# sourceMappingURL=schema-from-export.js.map