const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://khalid:1234@cluster0.qcris2c.mongodb.net/news-site?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Успешно соеденилась с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'));


app.use(require('./routes'))


app.listen(3000, () => {
  console.log('Server started on localhost:3000');
})