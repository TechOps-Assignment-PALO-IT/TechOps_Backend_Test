import { Router, Request, Response } from 'express'
import { helloController } from '../../../controllers/v1'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await helloController.getHello()
    res.send(response)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router