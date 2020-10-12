// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Environment is set to Node

// Port
export const PORT = process.env.PORT || 8000

// We can see our site at localhost:8000
