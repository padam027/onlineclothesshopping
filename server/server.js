const express = require('express')
const cors = require('cors')
require('dotenv').config()

const errorMiddleware = require('./middlewares/errorMiddleWare')
const getConnection = require('./configs/connection')
const ordersRoutes = require('./routes/ordersRoutes')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/orders', ordersRoutes)
app.use(errorMiddleware)

getConnection()
app.listen(process.env.PORT || 3001, ()=> {
    console.log('Server is up and running....', process.env.PORT);
})