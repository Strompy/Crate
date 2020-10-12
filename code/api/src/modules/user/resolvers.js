// Imports
import bcrypt from 'bcrypt'
// used to has password for safe storage
import jwt from 'jsonwebtoken'
// use json web token for authentication of user

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)
// hashes password, saltRounds = 10 something about running the calculation 2^10 times
    return await models.User.create({
      name,
      email,
      password: passwordHashed
      // only storing hashed password in DB
    })
    // no sad path for bad data
    // no passsword confirmation
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)
// checks password matches
    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
      // returns used object as user, and returns json web token for authentication
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
  // returns the user object
}

// Get all
export async function getAll() {
  return await models.User.findAll()
  // returns all user objects
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
  // destroys user based on id, no authentication/authorization
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}
