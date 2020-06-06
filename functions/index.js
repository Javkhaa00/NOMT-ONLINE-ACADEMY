const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let db = admin.firestore();

db.collection('users').get()
    .then((res) => {
        console.log(res)
    })

exports.app = functions.https.onRequest((req, res) => {
    res.send('hello from nomt')
});