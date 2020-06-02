const express = require('express');
const app = express();
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
});




app.listen(5000, function() {
  console.log("Listening for requests on Port 5000")
})