// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CrateProductType from './types'
import { getAll, getByCrate, getProduct, get } from './resolvers'

// CrateProducts All
export const crateProducts = {
  type: new GraphQLList(CrateProductType),
  resolve: getAll
}

// CrateProducts by crate
export const crateProductsByCrate = {
  type: new GraphQLList(CrateProductType),
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getByCrate
}

// CrateProducts by product
export const crateProductsByProduct = {
  type: new GraphQLList(CrateProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getByProduct
}

// CrateProduct By id
export const crateProduct = {
  type: CrateProductType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
