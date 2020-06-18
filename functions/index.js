const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const db = admin.firestore()

const users = () => {
  return db.collection('users')
  .get()
  .then(querySnapshot => querySnapshot.forEach(doc => console.log(doc.data())))
}

exports.app = functions.https.onRequest((req, res) => {
  users()
  res.send('done')
})

exports.call = functions.https.onCall((data, context) => {
  return `hello it's me, i was wondreing ${data.name}`; 
})

exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100)
  res.send(number.toString())
})
