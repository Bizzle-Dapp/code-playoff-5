const express = require('express')
const app = express()
const port = 3001
let cors = require('cors');

let weatherRouter = require('./routes/weatherRouter');

app.use(cors());

app.get('/', (req, res) => {
  res.send('API Running')
})

app.use('/weather', weatherRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})