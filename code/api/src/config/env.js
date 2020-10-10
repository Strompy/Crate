// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV
// development database

// Port
export const PORT = process.env.PORT || 8000
