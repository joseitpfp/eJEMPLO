const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname, 'Ejemplo.html')
})

app.listen(3000)