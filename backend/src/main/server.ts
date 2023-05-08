import "reflect-metadata"
import 'module-alias/register'
import express from 'express'
import bodyParser from "body-parser"
import setupRoutes from '@/main/api/router'

const server = express()
server.use(bodyParser.json())
setupRoutes(server)
server.listen(3001, () => console.log('Server started!'))

