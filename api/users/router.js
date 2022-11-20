// example of router using controller's functions
import express from 'express'
import userController from './controller.js'

const router = express.Router()

router.get('/', userController.get_users)

export default router