import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { getResponse } from './utils/getResponse'

const app = express()
const port = 3000

app.use(
  cors({
    origin: '*', // TODO: set URLs safelist
  })
)

app.use(helmet())

app.use(express.json())

app.post('/', async (req, res) => {
  const { status, body } = await getResponse(req.body)

  res.status(status).json(body)
})

const server = app.listen(port, () => {
  console.log(`Running on port ${port}.`)
})

export { server }
