// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import ProductType from '../product/types'
import CrateType from '../crate/types'

// CrateProduct type
const CrateProductType = new GraphQLObjectType({
  name: 'crateProduct',
  description: 'CrateProduct Type',

  fields: () => ({
    id: { type: GraphQLInt },
    product: { type: ProductType },
    crate: { type: CrateType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateProductType
