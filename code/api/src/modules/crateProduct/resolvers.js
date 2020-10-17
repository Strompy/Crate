// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get CrateProduct by ID
export async function get(parentValue, { id }) {
  return await models.CrateProduct.findOne({
    where: { id },
    include: [
      { model: models.Crate, as: 'crate' },
      { model: models.Product, as: 'product' },
    ]
  })
}

// Get CrateProduct by crate
export async function getByCrate (parentValue, { crateId }) {
  return await models.CrateProduct.findAll({
    where: {
      crateId: crateId
    },
    include: [
      {model: models.Product, as: 'product'},
      {model: models.Crate, as: 'crate'},
    ]
  })
}


// Get CrateProduct by product
export async function getByProduct(parentValue, { productId }) {
  return await models.CrateProduct.findAll({
    where: {
      productId: productId
    },
    include: [
      {model: models.Product, as: 'product'},
      {model: models.Crate, as: 'crate'},
    ]
  })
}


// Get all crateProducts
export async function getAll() {
  return await models.CrateProduct.findAll({
    include: [
      { model: models.Product, as: 'product' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create crateProduct
export async function create(parentValue, { crateId, productId }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.CrateProduct.create({
      crateId,
      productId
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.CrateProduct.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
