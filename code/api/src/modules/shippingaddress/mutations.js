// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import ShippingAddressType from './types'
import { create, remove } from './resolvers'

// Subscription create
export const shippingaddressCreate = {
  type: ShippingAddressType,
  args: {
    userId: {
      name: 'userId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const shippingaddressRemove = {
  type: ShippingAddressType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
