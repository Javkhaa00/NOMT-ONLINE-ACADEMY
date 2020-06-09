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
firebase.initializeApp(firebaseConfig);

const createUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error: " + errorMessage);
    });
}

export {createUser}

