const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient


const connection = "mongodb+srv://emily:mongo@cluster0-5zjjm.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(connection, 
    { useUnifiedTopology: true })
  .then(client => {
    console.log('Successfully connected to the todolist database')
    const db = client.db('todos')
    const todos = db.collection('todos')


app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.listen(5000, function() {
  console.log("Listening for requests on Port 5000")
})

})
.catch(console.error)