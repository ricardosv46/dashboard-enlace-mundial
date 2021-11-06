import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://apienlacemundial.softaki.com/public/graphql',
  cache: new InMemoryCache()
})

export default client
