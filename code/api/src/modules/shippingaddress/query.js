// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ShippingAddressType from './types'
import { getAll, get, getByUser } from './resolvers'

// Shipping Address All
export const shippingAddresses = {
  type: new GraphQLList(ShippingAddressType),
  resolve: getAll
}

// Shipping Address By user
export const shippingAdressByUser = {
  type: new GraphQLList(ShippingAddressType),
  resolve: getByUser
}

// Shipping Address By id
export const shippingAddress = {
  type: ShippingAddressType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
