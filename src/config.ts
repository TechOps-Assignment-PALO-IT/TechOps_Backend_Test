import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })

interface Config {
  PORT: string | number
}

const config: Config = {
  PORT: process.env.PORT || 5000,
}

export default config
