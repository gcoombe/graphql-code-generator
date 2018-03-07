/// <reference types="handlebars" />
import { FileOutput, Settings } from './types';
import { SchemaTemplateContext, Document } from '../../graphql-codegen-core/dist';
import { GeneratorConfig } from '../../graphql-codegen-generators/dist';
export declare function generateSingleFile(compiledIndexTemplate: HandlebarsTemplateDelegate, executionSettings: Settings, config: GeneratorConfig, templateContext: SchemaTemplateContext, documents: Document): FileOutput[];
