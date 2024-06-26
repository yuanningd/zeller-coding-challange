import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client'
import awsConfig from '../aws-exports'

const httpLink = new HttpLink({
  uri: awsConfig.aws_appsync_graphqlEndpoint,
})

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'x-api-key': awsConfig.aws_appsync_apiKey,
    },
  })
  return forward(operation)
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
