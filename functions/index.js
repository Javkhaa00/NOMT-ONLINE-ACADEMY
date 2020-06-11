const functions = require('firebase-functions')

console.log('wtf')

exports.app = functions.https.onRequest((req, res) => {
  res.send('hello from nomt')
})
