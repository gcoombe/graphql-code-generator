(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EInputType = {
    SINGLE_FILE: 'SINGLE_FILE',
    MULTIPLE_FILES: 'MULTIPLE_FILES',
    PROJECT: 'PROJECT',
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index = __webpack_require__(5);
var type = __webpack_require__(6);
var schema = __webpack_require__(7);
var documents = __webpack_require__(8);
var selectionSet = __webpack_require__(2);
var types_1 = __webpack_require__(0);
var config = {
    inputType: types_1.EInputType.SINGLE_FILE,
    templates: {
        index: index,
        type: type,
        schema: schema,
        documents: documents,
        selectionSet: selectionSet,
    },
    flattenTypes: true,
    primitives: {
        String: 'string',
        Int: 'number',
        Float: 'number',
        Boolean: 'boolean',
        ID: 'string'
    },
    outFile: 'types.d.ts',
};
exports.default = config;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "{{#each this}}\n{{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{#if description }}  // {{description}}{{/if}}\n{{/each}}"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var type = __webpack_require__(9);
var enumTemplate = __webpack_require__(10);
var scalar = __webpack_require__(11);
var union = __webpack_require__(12);
var operation = __webpack_require__(13);
var fragment = __webpack_require__(14);
var selectionSet = __webpack_require__(2);
var types_1 = __webpack_require__(0);
var config = {
    inputType: types_1.EInputType.MULTIPLE_FILES,
    templates: {
        type: type,
        inputType: type,
        'enum': enumTemplate,
        'interface': type,
        scalar: scalar,
        union: union,
        operation: operation,
        fragment: fragment,
        selectionSet: selectionSet,
    },
    flattenTypes: true,
    primitives: {
        String: 'string',
        Int: 'number',
        Float: 'number',
        Boolean: 'boolean',
        ID: 'string'
    },
    filesExtension: 'd.ts',
};
exports.default = config;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(1);
exports.TypescriptSingleFile = config_1.default;
var config_2 = __webpack_require__(3);
exports.TypescriptMultiFile = config_2.default;
var types_1 = __webpack_require__(0);
exports.EInputType = types_1.EInputType;
var get_generator_1 = __webpack_require__(15);
exports.getGeneratorConfig = get_generator_1.getGeneratorConfig;
exports.definitions = get_generator_1.definitions;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "/* tslint:disable */\n{{#if config.printTime }}\n// Generated in {{ currentTime }}\n{{/if}}\n{{> schema }}\n{{> documents }}\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "{{ toComment description }}\nexport interface {{ name }}{{#if hasInterfaces}} extends {{#each interfaces}}{{this}}{{#unless @last}},{{/unless}}{{/each}}{{/if}} {\n{{#each fields}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "{{#each scalars}}\n\n{{ toComment description }}\nexport type {{ name }} = any;\n{{/each}}\n{{#each interfaces}}\n  {{~> type }}\n{{/each}}\n{{#each types}}\n  {{~> type }}\n{{/each}}\n{{#each inputTypes}}\n  {{~> type }}\n{{/each}}\n{{~#each types}}\n  {{~#each fields}}\n    {{~# if hasArguments }}\nexport interface {{ toPascalCase name }}{{ toPascalCase ../name }}Args {\n{{#each arguments}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n    {{/if}}\n  {{/each}}\n{{/each}}\n{{#each enums}}\n{{ toComment description }}\nexport enum {{ name }} {\n  {{#each values }}{{value}} = \"{{ value }}\",{{#unless @last}}\n  {{/unless}}{{/each}}\n}\n\n{{/each}}\n{{#each unions}}\n{{ toComment description }}\nexport type {{ name }} = {{#each possibleTypes}}{{this}}{{#unless @last}} | {{/unless}}{{/each}};\n\n{{/each}}\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "{{#each operations }}\nexport namespace {{ toPascalCase name }} {\n  export type Variables = {\n  {{#each variables}}\n    {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}};\n  {{/each}}\n  }\n\n  export type {{ toPascalCase operationType }} ={{#if hasFields}} {\n    {{> selectionSet fields }}\n  }{{/if}} {{#if hasFragmentsSpread}}{{#if hasFields}}& {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}}& {{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} & {{/unless}}{{/each}}{{/if}}\n  {{#each innerModels }}\n\n  export type {{ modelType }} ={{#if hasFields}} {\n    {{> selectionSet fields }}\n  }{{/if}} {{#if hasFragmentsSpread}}{{#if hasFields}}& {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}}& {{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} & {{/unless}}{{/each}}{{/if}}\n  {{/each}}\n}\n{{/each}}\n{{#each fragments }}\n\nexport namespace {{name}} {\n  export type Fragment ={{#if hasFields}} {\n    {{> selectionSet fields }}\n  }{{/if}} {{#if hasFragmentsSpread}}{{#if hasFields}}& {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}}& {{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} & {{/unless}}{{/each}}{{/if}}\n  {{#each innerModels }}\n\n  export type {{ modelType }} ={{#if hasFields}} {\n    {{> selectionSet fields }}\n  }{{/if}} {{#if hasFragmentsSpread}}{{#if hasFields}}& {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}}& {{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} & {{/unless}}{{/each}}{{/if}}\n  {{/each}}\n}\n{{/each}}"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\n{{ toComment description }}\nexport interface {{ name }}{{#if hasInterfaces}} extends {{#each interfaces}}{{this}}{{#unless @last}},{{/unless}}{{/each}}{{/if}} {\n{{#each fields}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n\n{{#each fields}}\n  {{~# if hasArguments }}\nexport interface {{ toPascalCase name }}{{ toPascalCase ../name }}Args {\n{{#each arguments}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n  {{/if}}\n{{/each}}"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "{{ toComment description }}\nexport enum {{ name }} {\n  {{#each values }}{{value}} = \"{{ value }}\",{{#unless @last}}\n  {{/unless}}{{/each}}\n}"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\n{{ toComment description }}\nexport type {{ name }} = any;\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\n{{ toComment description }}\nexport type {{ name }} = {{#each possibleTypes}}{{this}}{{#unless @last}} | {{/unless}}{{/each}};\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\nexport namespace {{ toPascalCase name }} {\n  export type Variables = {\n{{#each variables}}\n    {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}};\n{{/each}}\n  }\n\n  export type {{ toPascalCase operationType }} ={{#if hasFields}} {\n    {{> selectionSet fields }}\n  }{{/if}} {{#if hasFragmentsSpread}}{{#if hasFields}}& {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}}& {{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} & {{/unless}}{{/each}}{{/if}}\n  {{#each innerModels }}\n\n  export type {{ modelType }} ={{#if hasFields}} {\n    {{> selectionSet fields }}\n  }{{/if}} {{#if hasFragmentsSpread}}{{#if hasFields}}& {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}}& {{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} & {{/unless}}{{/each}}{{/if}}\n  {{/each}}\n}\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\nexport namespace {{name}} {\n  export type Fragment = {\n    {{> selectionSet fields }}\n  } {{#if hasFragmentsSpread}}{{#each fragmentsSpread}} & {{fragmentName}}.Fragment{{/each}}{{/if}}{{#if hasInlineFragments}}{{#each inlineFragments}} & {{onType}}{{/each}}{{/if}}\n  {{#each innerModels }}\n  export type {{ modelType }} = {\n    {{> selectionSet fields }}\n  } {{#if hasFragmentsSpread}}{{#each fragmentsSpread}} & {{fragmentName}}.Fragment{{/each}}{{/if}}{{#if hasInlineFragments}}{{#each inlineFragments}} & {{onType}}{{/each}}{{/if}}\n  {{/each}}\n}"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(1);
var config_2 = __webpack_require__(3);
exports.definitions = {
    // TypeScript single file
    ts: config_1.default,
    typescript: config_1.default,
    'ts-single': config_1.default,
    'typescript-single': config_1.default,
    // TypeScript multiple files
    'ts-multiple': config_2.default,
    'typescript-multiple': config_2.default,
};
function getGeneratorConfig(name) {
    return exports.definitions[name];
}
exports.getGeneratorConfig = getGeneratorConfig;


/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map