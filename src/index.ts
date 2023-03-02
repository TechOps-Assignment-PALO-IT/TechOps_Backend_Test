import express from 'express'
import config from './config'
import routes from './routes'

const app = express()

app.use('/api', routes)

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`))
