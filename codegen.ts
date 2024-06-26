import { CodegenConfig } from '@graphql-codegen/cli'
import awsconfig from './src/aws-exports'

const config: CodegenConfig = {
  schema: {
    [awsconfig.aws_appsync_graphqlEndpoint]: {
      headers: {
        'x-api-key': awsconfig.aws_appsync_apiKey,
      },
    },
  },
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
