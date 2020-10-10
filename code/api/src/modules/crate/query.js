// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'
// reslovers are like route#action

// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    // Argument for ordering the crates
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    // Argument of the crate id
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
