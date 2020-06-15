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

exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100)
  res.send(number.toString())
})

exports.hello = functions.https.onCall((data, context) => {
  const name = data.name
  return `Hello to ${name}`
})

// const button = document.getElementById('inspiration')
// button.addEventListener('click', () => {
//   const hello = firebase.functions().httpsCallable('hello')
//   hello({ name: 'zolboo' }).then(result => {
//     console.log(result.data)
//   })
// })

// module.exports = {
//     checkUsernames: functions.https.onRequest(checkUsernames),
// };
