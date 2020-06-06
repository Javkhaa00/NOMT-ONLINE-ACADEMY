const functions = require('firebase-functions');
const express = require('express')

const app = express()

app.get('/thisIs', (req, res) => {
    res.send('spartaaaa!!!!!!')
})


exports.app = functions.https.onRequest(app);
