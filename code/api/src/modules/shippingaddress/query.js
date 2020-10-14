// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ShippingAddressType from './types'
import { getAll, getByShippingaddress, get } from './resolvers'

// Shipping Address All
export const shippingaddress = {
  type: new GraphQLList(ShippingAddressType),
  resolve: getAll
}

// Shipping Address By user
export const subscriptionsByShippingaddress = {
  type: new GraphQLList(ShippingAddressType),
  resolve: getByUser
}

// Shipping Address By id
export const shippingaddress = {
  type: ShippingAddressType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
