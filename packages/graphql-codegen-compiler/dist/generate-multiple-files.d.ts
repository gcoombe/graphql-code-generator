import { FileOutput, MultiFileTemplates, Settings } from './types';
import { GeneratorConfig } from '../../graphql-codegen-generators/dist';
import { SchemaTemplateContext, Document } from '../../graphql-codegen-core/dist';
export declare const ALLOWED_CUSTOM_TEMPLATE_EXT: string[];
export declare function generateMultipleFiles(templates: MultiFileTemplates, executionSettings: Settings, config: GeneratorConfig, templateContext: SchemaTemplateContext, documents: Document): FileOutput[];
