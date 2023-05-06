import "reflect-metadata"
import 'module-alias/register'
import express from 'express'
import setupRoutes from '@/main/api/router'

const server = express()
setupRoutes(server)
server.listen(3001, () => console.log('Server started!'))

