// Defines graphql mutation functions

// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
// import all functions and name as user
import * as product from '../../modules/product/mutations'
// import all functions and name as product
import * as crate from '../../modules/crate/mutations'
// import all functions and name as crate
import * as subscription from '../../modules/subscription/mutations'
// import all functions and name as subscription

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
    // sets  mutation fields based on the imported functions. ... = spread into an array?
  }
})

export default mutation
