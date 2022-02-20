import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.SERVER_PORT
export const environment = process.env.NODE_ENV
