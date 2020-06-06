const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();


exports.app = functions.https.onRequest((req, res) => {
    res.send('hello from nomt')
});