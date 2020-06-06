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
    await db.collection('users').doc(userData)
    // console.log("successful register")
    res.redirect('/sign-in')
})

let db = admin.firestore();

app.post('/sign-in', async function (req, res) {
    const userData = {
        "email": req.body.email,
        "password": req.body.password
    }
    // console.log(userData.email, userData.password);
    // const user = await db.collection('users').findOne({ email: req.body.email, pass: req.body.password });

    // if (!user) {
    //     // User was not found
    //     console.log("not found");
    //     res.redirect('/sign-in/error')
    //     return;
    // }
    // UI = {
    //     name: user.second_name,
    // }
    // res.redirect('/')
})

// let docRef = db.collection('users').doc('user');

// let setUser = docRef.set(userData);

// const createUser = (username) => {
//     db
//         .collection('usernames')
//         .get(inputUsername())
//         .then((doc) => {
//             if (doc.exists) {
//                 return usernameUnavailable();
//             }

//             return createAccount();
//         })
//         .catch((error) => handleError(error));
// }
