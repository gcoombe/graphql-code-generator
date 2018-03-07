#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var cli_1 = require("./cli");
var dist_1 = require("../../graphql-codegen-core/dist");
var options = cli_1.initCLI(process.argv);
dist_1.debugLog("Started CLI with options: ", options);
cli_1.executeWithOptions(options)
    .then(function (generationResult) {
    dist_1.debugLog("Generation result contains total of " + generationResult.length + " files...");
    if (process.env.VERBOSE !== undefined) {
        console.log("Generation result is: ", generationResult);
    }
    generationResult.forEach(function (result) {
        fs.writeFileSync(result.filename, result.content);
        console.log("Generated file written to " + result.filename);
    });
})
    .catch(cli_1.cliError);
//# sourceMappingURL=index.js.map