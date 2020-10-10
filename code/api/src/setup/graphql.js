// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  server.use(authentication)

  // API (GraphQL endpoint on route `/`)
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
    schema,
    graphiql: serverConfig.graphql.ide,
    // graphiql set to true
    pretty: serverConfig.graphql.pretty,
    // pretty print set to true
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
        // checking is user exists and id is legit?
      }
    }
  })))
}
