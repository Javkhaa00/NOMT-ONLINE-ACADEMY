const functions = require('firebase-functions')
const admin = require('firebase-admin')
var serviceAccount = require("./nomt-academy-firebase-adminsdk-zhwiq-a84de91d4d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://nomt-academy.firebaseio.com"
});

let db = admin.firestore()

db.collection('users').get()
  .then((res) => {
    // console.log(res)
  })

console.log('wtf')

exports.app = functions.https.onRequest((req, res) => {
  res.send('hello from nomt')
})
