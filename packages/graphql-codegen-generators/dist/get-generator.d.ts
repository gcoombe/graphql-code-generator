import { GeneratorConfig } from './types';
export declare const definitions: {
  ts: GeneratorConfig;
  typescript: GeneratorConfig;
  'ts-single': GeneratorConfig;
  'typescript-single': GeneratorConfig;
  'ts-multiple': GeneratorConfig;
  'typescript-multiple': GeneratorConfig;
};
export declare function getGeneratorConfig(name: string): GeneratorConfig;
