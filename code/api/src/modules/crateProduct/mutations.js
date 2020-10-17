// Imports
import { GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import CrateProductType from './types'
import { create, remove } from './resolvers'

// CrateProduct create
export const crateProductCreate = {
  type: CrateProductType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    },
    productId: {
      name: 'productId',
      type: GraphQLInt
    }
  },
  resolve: create
}


// CrateProduct remove
export const crateProductRemove = {
  type: CrateProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
