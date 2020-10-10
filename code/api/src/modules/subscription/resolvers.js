// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, { id }) {
  return await models.Subscription.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get subscription by user
// searching subscriptions(and associated crates) by user is helpful
// This is a function that could be repurposed to return the 'kept' items from orders for a user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Subscription.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
      ]
    })
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
}

// Get all subscriptions
export async function getAll() {
  return await models.Subscription.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create subscription
// this function for creating a subscription and many other mutations require user authorization.
export async function create(parentValue, { crateId }, { auth }) {
  // if (the user is authorized)
  if(auth.user && auth.user.id > 0) {
    // create a subscription
    return await models.Subscription.create({
      crateId,
      // sets the user Id to whatever user is authenticated at the time
      userId: auth.user.id
    })
  } else {
    // super nice error message
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Subscription.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}
