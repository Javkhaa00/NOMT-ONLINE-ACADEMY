const functions = require('firebase-functions');
const admin = require('firebase-admin');
const checkUsernames = require('./database');
admin.initializeApp();

let db = admin.firestore();

const uid = admin.firestore().collection("tmp").doc().id
// db.collection('users').get()
//     .then((res) => {
//         console.log(res)
//     })

exports.app = functions.https.onRequest((req, res) => {
    res.send('hello from nomt')
});

// module.exports = {
//     checkUsernames: functions.https.onRequest(checkUsernames),
// };
