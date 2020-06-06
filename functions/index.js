const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let db = admin.firestore();

console.log(db.collection('users')  )

exports.app = functions.https.onRequest((req, res) => {
    res.send('hello from nomt')
});