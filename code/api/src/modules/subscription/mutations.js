// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
// subscriptionType is for GraphQL schema of types
import { create, remove } from './resolvers'
// reslovers are like route#action

// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    // create takes an argument of crateId since the user is logged in and that data is passed somewhere (params?)
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
