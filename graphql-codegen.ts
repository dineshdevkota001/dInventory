import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  hooks: { afterAllFileWrite: ['prettier --write ./renderer/generated/'] },
  schema: 'http://localhost:4000/graphql',
  documents: 'renderer/graphql/**/*.graphql',
  generates: {
    'renderer/generated/schema.json': {
      plugins: ['introspection'],
    },
    'renderer/generated/introspection.json': {
      plugins: ['urql-introspection'],
    },
    'renderer/generated/types.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        noExport: true,
        enumAsTypes: true,
        typesPrefix: 'I',
        enumPrefix: false,
      },
    },
    'renderer/generated/enum.ts': {
      plugins: ['typescript'],
      config: {
        onlyEnums: true,
      },
    },
    'renderer/generated/graphql.ts': {
      plugins: ['typescript-urql'],
      config: {
        typesPrefix: 'I',
      },
    },
  },
};

export default config;
