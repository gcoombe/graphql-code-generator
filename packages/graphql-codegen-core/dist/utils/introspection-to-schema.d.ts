import { GraphQLSchema, IntrospectionQuery } from 'graphql';
export declare const validateIntrospection: (schema: any) => void;
export declare function introspectionToGraphQLSchema(introspectionQuery: IntrospectionQuery): GraphQLSchema;
