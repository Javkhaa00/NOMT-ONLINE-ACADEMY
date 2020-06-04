var express = require("express");
var bodyParser = require("body-parser");

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'

const dbName = 'database'
let db

// var mydb = connect('host[:5000]/mydb');

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

var app = express()

app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('hi')
  console.log('hello world')
})

app.post('/sign-up', async function (req, res) {
  const userData = {
    "first_name": req.body.first_name,
    "second_name": req.body.second_name,
    "email": req.body.email,
    "pass": req.body.password,
    "phone": req.body.phone_number,
    "class_number": req.body.class,
    "school": req.body.school,
    "year": req.body.year,
    "month": req.body.month,
    "day": req.body.day
  }
  console.log(userData.first_name, userData.second_name, userData.email, userData.pass, userData.phone, userData.school, userData.class_number, userData.year, userData.month, userData.day);

  await db.collection('users').insertOne(userData)
  // res.send("success")
  res.redirect('/sign-in')
})

app.post('/sign-in', async function (req, res) {
  const userData = {
    "email": req.body.email,
    "password": req.body.password
  }
  console.log(userData.email, userData.password);
  const user = await db.collection('users').findOne({ email: req.body.email, password: req.body.password });
  if (!user) {
    // User was not found
    res.send('invalid email or password')
    return;
  }

  res.send("success");
})

app.options('/url...', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header("Access-Control-Allow-Headers", "accept, content-type");
  res.header("Access-Control-Max-Age", "1728000");
  return res.sendStatus(200);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
