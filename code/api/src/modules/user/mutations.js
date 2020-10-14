// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    bio: {
      name: 'bio',
      type: GraphQLString
    },

    image: {
      name: 'image',
      type: GraphQLString
    },

    street: {
      name: 'street',
      type: GraphQLString
    },

    city: {
      name: 'city',
      type: GraphQLString
    },

    state: {
      name: 'state',
      type: GraphQLString
    },

    zip: {
      name: 'zip',
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
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
