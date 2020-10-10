// Imports
import express from 'express'
import path from 'path'
// The path module provides utilities for working with file and directory paths.
import cors from 'cors'
// cross-origin resource sharing, helps front and back work together
import bodyParser from 'body-parser'
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
import cookieParser from 'cookie-parser'
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
import morgan from 'morgan'
// HTTP request logger middleware for node.js

// App Imports
import { NODE_ENV } from '../config/env'

// Load express modules
export default function (server) {
  console.info('SETUP - Loading modules...')

  // Enable CORS
  server.use(cors())

  // Request body parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  // Request body cookie parser
  server.use(cookieParser())

  // Static files folder
  server.use(express.static(path.join(__dirname, '..', '..', 'public')))

  // HTTP logger
  if(NODE_ENV === 'development') {
    server.use(morgan('tiny'))
  }
}
