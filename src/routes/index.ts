import { Router } from 'express'

/**** route modules ****/
import v1Routes from './v1'
import pingRoutes from './ping'

const router = Router()

router.use('/v1', v1Routes)
router.use('/ping', pingRoutes)

export default router