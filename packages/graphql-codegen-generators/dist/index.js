!(function(e, n) {
  for (var s in n) e[s] = n[s];
})(
  exports,
  (function(e) {
    var n = {};
    function s(t) {
      if (n[t]) return n[t].exports;
      var i = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
    }
    return (
      (s.m = e),
      (s.c = n),
      (s.d = function(e, n, t) {
        s.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: t });
      }),
      (s.r = function(e) {
        Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (s.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return s.d(n, 'a', n), n;
      }),
      (s.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (s.p = ''),
      (s.w = {}),
      s((s.s = 16))
    );
  })([
    function(e, n, s) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.EInputType = { SINGLE_FILE: 'SINGLE_FILE', MULTIPLE_FILES: 'MULTIPLE_FILES', PROJECT: 'PROJECT' });
    },
    function(e, n, s) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 });
      var t = s(11),
        i = s(10),
        a = s(9),
        r = s(8),
        o = s(7),
        l = s(6),
        p = s(3),
        c = s(2),
        u = {
          inputType: s(0).EInputType.MULTIPLE_FILES,
          templates: {
            type: t,
            inputType: t,
            enum: i,
            interface: t,
            scalar: a,
            union: r,
            operation: o,
            fragment: l,
            selectionSet: p,
            fragments: c
          },
          flattenTypes: !0,
          primitives: { String: 'string', Int: 'number', Float: 'number', Boolean: 'boolean', ID: 'string' },
          filesExtension: 'ts'
        };
      n.default = u;
    },
    function(e, n) {
      e.exports =
        '{{#if hasFragmentsSpread}}{{#if hasFields}} & {{/if}}{{#each fragmentsSpread}}{{fragmentName}}.Fragment{{#unless @last}} & {{/unless}}{{/each}}{{/if}}{{#if hasInlineFragments}}{{#if hasFields}} & ({{/if}}{{#each inlineFragments}}{{onType}}{{#unless @last}} | {{/unless}}{{/each}}{{#if hasFields}}){{/if}}{{/if}}\n';
    },
    function(e, n) {
      e.exports =
        '{{#each this}}\n{{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{#if description }}  // {{description}}{{/if}}\n{{/each}}';
    },
    function(e, n, s) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 });
      var t = s(15),
        i = s(14),
        a = s(13),
        r = s(12),
        o = s(3),
        l = s(2),
        p = {
          inputType: s(0).EInputType.SINGLE_FILE,
          templates: { index: t, type: i, schema: a, documents: r, selectionSet: o, fragments: l },
          flattenTypes: !0,
          primitives: { String: 'string', Int: 'number', Float: 'number', Boolean: 'boolean', ID: 'string' },
          outFile: 'types.ts'
        };
      n.default = p;
    },
    function(e, n, s) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 });
      var t = s(4),
        i = s(1);
      (n.definitions = {
        ts: t.default,
        typescript: t.default,
        'ts-single': t.default,
        'typescript-single': t.default,
        'ts-multiple': i.default,
        'typescript-multiple': i.default
      }),
        (n.getGeneratorConfig = function(e) {
          return n.definitions[e];
        });
    },
    function(e, n) {
      e.exports =
        '{{#eachImport this }}\nimport { {{ name }} } from \'./{{ file }}\';\n{{/eachImport}}\nexport namespace {{name}} {\n  export type Fragment = {\n    __typename?: "{{ onType }}";\n    {{> selectionSet fields }}\n  }{{> fragments this }}\n  {{#each innerModels }}\n  export type {{ modelType }} = {\n  {{#unless hasInlineFragments}}\n    __typename?: "{{ schemaBaseType }}";\n  {{else}}\n    __typename?: {{#each inlineFragments}}{{onType}}["__typename"]{{#unless @last}} | {{/unless}}{{/each}};\n  {{/unless}}\n    {{> selectionSet fields }}\n  }{{> fragments this }}\n  {{/each}}\n}\n';
    },
    function(e, n) {
      e.exports =
        '{{#eachImport this }}\nimport { {{ name }} } from \'./{{ file }}\';\n{{/eachImport}}\nexport namespace {{ toPascalCase name }} {\n  export type Variables = {\n{{#each variables}}\n    {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}};\n{{/each}}\n  }\n\n  export type {{ toPascalCase operationType }} ={{#if hasFields}} {\n    __typename?: "{{ toPascalCase operationType }}";\n    {{> selectionSet fields }}\n  }{{/if}}{{> fragments this }}\n  {{#each innerModels }}\n\n  export type {{ modelType }} ={{#if hasFields}} {\n  {{#unless hasInlineFragments}}\n    __typename?: "{{ schemaBaseType }}";\n  {{else}}\n    __typename?: {{#each inlineFragments}}{{onType}}["__typename"]{{#unless @last}} | {{/unless}}{{/each}};\n  {{/unless}}\n    {{> selectionSet fields }}\n  }{{/if}}{{> fragments this }}\n  {{/each}}\n}\n';
    },
    function(e, n) {
      e.exports =
        "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\n{{ toComment description }}\nexport type {{ name }} = {{#each possibleTypes}}{{this}}{{#unless @last}} | {{/unless}}{{/each}};\n";
    },
    function(e, n) {
      e.exports =
        "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\n{{ toComment description }}\nexport type {{ name }} = any;\n";
    },
    function(e, n) {
      e.exports =
        '{{ toComment description }}\nexport enum {{ name }} {\n  {{#each values }}{{value}} = "{{ value }}",{{#unless @last}}\n  {{/unless}}{{/each}}\n}';
    },
    function(e, n) {
      e.exports =
        "{{#eachImport this }}\nimport { {{ name }} } from './{{ file }}';\n{{/eachImport}}\n{{ toComment description }}\nexport interface {{ name }}{{#if hasInterfaces}} extends {{#each interfaces}}{{this}}{{#unless @last}},{{/unless}}{{/each}}{{/if}} {\n{{#each fields}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n\n{{#each fields}}\n  {{~# if hasArguments }}\nexport interface {{ toPascalCase name }}{{ toPascalCase ../name }}Args {\n{{#each arguments}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n  {{/if}}\n{{/each}}";
    },
    function(e, n) {
      e.exports =
        '{{#each operations }}\nexport namespace {{ toPascalCase name }} {\n  export type Variables = {\n  {{#each variables}}\n    {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}};\n  {{/each}}\n  }\n\n  export type {{ toPascalCase operationType }} ={{#if hasFields}} {\n    __typename?: "{{ toPascalCase operationType }}";\n    {{> selectionSet fields }}\n  }{{/if}}{{> fragments this }}\n  {{#each innerModels }}\n\n  export type {{ modelType }} ={{#if hasFields}} {\n  {{#unless hasInlineFragments}}\n    __typename?: "{{ schemaBaseType }}";\n  {{else}}\n    __typename?: {{#each inlineFragments}}{{onType}}["__typename"]{{#unless @last}} | {{/unless}}{{/each}};\n  {{/unless}}\n    {{> selectionSet fields }}\n  }{{/if}}{{> fragments this }}\n  {{/each}}\n}\n{{/each}}\n{{#each fragments }}\n\nexport namespace {{name}} {\n  export type Fragment ={{#if hasFields}} {\n    __typename?: "{{ onType }}";\n    {{> selectionSet fields }}\n  }{{/if}}{{> fragments this }}\n  {{#each innerModels }}\n\n  export type {{ modelType }} ={{#if hasFields}} {\n  {{#unless hasInlineFragments}}\n    __typename?: "{{ schemaBaseType }}";\n  {{else}}\n    __typename?: {{#each inlineFragments}}{{onType}}["__typename"]{{#unless @last}} | {{/unless}}{{/each}};\n  {{/unless}}\n    {{> selectionSet fields }}\n  }{{/if}}{{> fragments this }}\n  {{/each}}\n}\n{{/each}}\n\n';
    },
    function(e, n) {
      e.exports =
        '{{#each scalars}}\n\n{{ toComment description }}\nexport type {{ name }} = any;\n{{/each}}\n{{#each interfaces}}\n  {{~> type }}\n\n{{/each}}\n{{#each types}}\n  {{~> type }}\n\n{{/each}}\n{{#each inputTypes}}\n  {{~> type }}\n\n{{/each}}\n{{~#each types}}\n  {{~#each fields}}\n    {{~# if hasArguments }}\nexport interface {{ toPascalCase name }}{{ toPascalCase ../name }}Args {\n{{#each arguments}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n    {{/if}}\n  {{/each}}\n{{/each}}\n{{#each enums}}\n{{ toComment description }}\nexport enum {{ name }} {\n  {{#each values }}{{value}} = "{{ value }}",{{#unless @last}}\n  {{/unless}}{{/each}}\n}\n\n{{/each}}\n{{#each unions}}\n{{ toComment description }}\nexport type {{ name }} = {{#each possibleTypes}}{{this}}{{#unless @last}} | {{/unless}}{{/each}};\n\n{{/each}}\n';
    },
    function(e, n) {
      e.exports =
        '{{ toComment description }}\nexport interface {{ name }}{{#if hasInterfaces}} extends {{#each interfaces}}{{this}}{{#unless @last}},{{/unless}}{{/each}}{{/if}} {\n{{#each fields}}\n  {{ name }}{{#unless isRequired}}?{{/unless}}: {{ toPrimitive type }}{{#if isArray}}[]{{/if}}{{#unless isRequired}} | null{{/unless}}; {{ toComment description }}\n{{/each}}\n}\n';
    },
    function(e, n) {
      e.exports =
        '/* tslint:disable */\n{{#if config.printTime }}\n// Generated in {{ currentTime }}\n{{/if}}\n{{> schema }}\n{{> documents }}\n';
    },
    function(e, n, s) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 });
      var t = s(4);
      n.TypescriptSingleFile = t.default;
      var i = s(1);
      n.TypescriptMultiFile = i.default;
      var a = s(0);
      n.EInputType = a.EInputType;
      var r = s(5);
      (n.getGeneratorConfig = r.getGeneratorConfig), (n.definitions = r.definitions);
    }
  ])
);
//# sourceMappingURL=index.js.map
