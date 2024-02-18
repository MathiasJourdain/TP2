const express = require('express')
const { connectTodB } = require('./services/db/connection')
const { createUser } = require('./controllers/users')
const { createItem } = require('./controllers/items')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use ((req , res, next) => {
  return next();
})
app.use(express.json());

app.listen(port, () => {
  connectTodB() 
  console.log(`Listening on port ${port}`)
})

app.post('/users/create', createUser);
app.post('/items/create', createItem);



