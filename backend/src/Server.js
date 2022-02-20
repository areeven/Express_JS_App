import express from 'express'
import {port} from './utils/DotEnv.js'
import Logger from './utils/Logger.js'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Api alive')
    Logger.debug('api is alive')
})

app.listen(port, () => {
    Logger.http(`api up and running on http://localhost:${port}`)
})

export default app