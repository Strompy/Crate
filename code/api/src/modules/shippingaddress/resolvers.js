// App Imports
import models from '../../setup/models'

// Get shippingaddress by ID
export async function get(parentValue, { id }) {
  return await models.ShippingAddress.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' }
    ]
  })
}

// Get subscription by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.ShippingAddress.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'}
      ]
    })
  } else {
    throw new Error('Please login to view your shippingaddress.')
  }
}

// Get all shippingaddresses
export async function getAll() {
  return await models.ShippingAddress.findAll({
    include: [
      { model: models.User, as: 'user' },
    ]
  })
}

// Update shippingaddress
export async function update(parentValue, { street, city, state, zip }, { auth }) {
    if(auth.user && auth.user.id > 0) {
    return await models.ShippingAddress.update(
      {
        street,
        city,
        state,
        zip
      },
      { where: {
        userId: auth.user.id }
    }
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete shipping address
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    const shippingaddress = await models.ShippingAddress.findOne({where: {id}})

    if (!shippingaddress) {
      // Address does not exist
      throw new Error('The shipping address does not exists.')
    } else {
      return await models.ShippingAddress.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation denied.')
  }
}
