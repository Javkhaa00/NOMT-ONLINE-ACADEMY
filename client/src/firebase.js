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
export const auth = firebase.auth();