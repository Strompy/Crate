// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './types'
// create CrateType for graphql
import { create, remove, update } from './resolvers'
// resolvers are the routes and actions

// Crate create
export const crateCreate = {
  type: CrateType,
  // creating a crate requires name and description fields
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Crate update
export const crateUpdate = {
  type: CrateType,
  // arguments for updating id, name and description
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
export const crateRemove = {
  type: CrateType,
  args: {
    // arguments for deleting a crate are just id
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
