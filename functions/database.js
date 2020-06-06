const express = require("express");
const bodyParser = require("body-parser");
const admin = require('firebase-admin');
admin.initializeApp();

var app = express()

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
    // console.log(userData);
    // await db.collection('users').insertOne(userData)
    // console.log("successful register")
    res.redirect('/sign-in')
})

const createUser = (username) => {
    db
        .collection('usernames')
        .get(inputUsername())
        .then((doc) => {
            if (doc.exists) {
                return usernameUnavailable();
            }

            return createAccount();
        })
        .catch((error) => handleError(error));
}

let db = admin.firestore();

let docRef = db.collection('users').doc('user');

let setUser = docRef.set(userData);
