// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
// middleware
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup uploads
setupUpload(server)
// creates upload endpoint - '/upload'

// Setup GraphQL
setupGraphQL(server)
// creates graphql endpoint - '/'

// Start server
setupStartServer(server)
