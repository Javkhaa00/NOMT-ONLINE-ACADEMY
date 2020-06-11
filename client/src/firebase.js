import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHBzU7R11gpgnHvEc1k-Xzhd0J7LEvPRY",
    authDomain: "nomt-academy.firebaseapp.com",
    databaseURL: "https://nomt-academy.firebaseio.com",
    projectId: "nomt-academy",
    storageBucket: "nomt-academy.appspot.com",
    messagingSenderId: "51870718811",
    appId: "1:51870718811:web:1e294eb55d7a4bb34d587e",
    measurementId: "G-DTXE1YSJXW"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const createUser = (fields) => {
    const db = firebase.firestore()
    const users = db.collection('users')
    users.get().then(async querySnapshot => {
        var count = 0,
          i = 0
        querySnapshot.forEach(doc => {
          i++
          count = doc.data().email === fields.email ? count + 1 : count
        })
        if (count === 0) {
          await users.doc(i + 1 + '').set({
            activity: '',
            name: fields.name,
            lastName: fields.lastName,
            email: fields.email,
            password: fields.password,
            birth: fields.year + ' ' + fields.month + ' ' + fields.day,
            owned: [''],
            school: fields.school,
            class: fields.grade,
            phone: fields.phoneNumber
          })
          window.location.href = '/sign-in'
        } else {
          alert('email id already used')
        }
      })
}

export {createUser}