const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient


const connection = "mongodb+srv://emily:mongo@cluster0-5zjjm.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(connection, 
    { useUnifiedTopology: true })
  .then(client => {
    console.log('Successfully connected to the todolist database')
    const db = client.db('todolist')
    const todos = db.collection('todos')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    db.collection('todos').find().toArray()
      .then(results => {
        res.render('index.ejs', { todos: results})
      })
      .catch()
})

app.post('/words', (req, res) => {
  todos.insertOne(req.body) 
   .then(result => {
    console.log(result)
    res.redirect('/')
  })
  .catch(error => console.error(error))
})

app.delete('/words', (req, res) => {
  todos.deleteOne(
    { todo: req.body.todo }
    )
      .then(result => {
          console.log(result)
        res.json('Your todo item was deleted')
      })
      .catch(error => console.error(error))
})


app.listen(5000, function() {
  console.log("Listening for requests on Port 5000")
})

})
.catch(console.error)