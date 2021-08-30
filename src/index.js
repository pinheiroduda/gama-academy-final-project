const express = require('express')
const mongoose = require('mongoose')
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')
const routes = require('./routes')
const app = express()
const cors = require('cors')

mongoose.connect(
  'mongodb+srv://eduardapinheiro:-JZdmX5mQKbt*cz@cluster0.yws7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
)
app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(routes)
app.listen(process.env.PORT || '5000', () => {
  console.log('rodando na porta 5000')
})
