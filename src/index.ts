import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
const port = 3000

app.use(cors())
app.use(helmet())

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'user' })
})

const server = app.listen(port, () => {
  console.log(`Running on port ${port}.`)
})

export { server }
