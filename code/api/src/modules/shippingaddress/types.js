// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'

// ShippingAddress type
const ShippingAddressType = new GraphQLObjectType({
  name: 'shippingaddress',
  description: 'ShippingAddress Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShippingAddressType
