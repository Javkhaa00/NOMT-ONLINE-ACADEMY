const functions = require('firebase-functions');
const express = require('express')
const bodyParser = require("body-parser");
const admin = require('firebase-admin');
admin.initializeApp();

const app = express()

app.get('/thisIs', (req, res) => {
    res.send(`${Date.now()}`);
})


app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

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
    
    res.redirect('/sign-in')
})

let db = admin.firestore();

let docRef = db.collection('users').doc('user');

db.collection('users').get()
    .then((res) => {
        console.log(res)
    })

let setUser = docRef.set(userData);


exports.app = functions.https.onRequest(app);