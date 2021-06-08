import connectDB from './db/mongoose.js'
import colors from 'colors'
import { errRouter, notFoundRouter } from './middlewares/errMiddlewares.js'
import express from 'express'

connectDB()

const app = express()
app.use(express.json())

// Api Endpoint
app.get('/api', (req, res) => {
  res.send({ message: 'Api is running...' })
})

// Custom Middlewares for Handling Errors
app.use(notFoundRouter)
app.use(errRouter)

// Port and Runnnig Server
const port = process.env.PORT

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
})
