// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
// userType is for GraphQL schema of types
import { create, remove } from './resolvers'
// reslovers are like route#action


// Create
export const userSignup = {
  type: UserType,
  args: {
    // arguments passed to create new user
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      // only requires user id
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
