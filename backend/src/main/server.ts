import "reflect-metadata"
import express from 'express'
import setupRoutes from './api/router'

const server = express()
setupRoutes(server)
server.listen(3001, () => console.log('Server started!'))

