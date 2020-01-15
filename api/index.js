const express = require('express')
const bodyParser = require('body-parser');
const db = require('./db')

// Create express instnace
const app = express()

// Init body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Require & Import API routes
const articles = require('./routes/articles')

// Use API Routes
app.use(articles)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}