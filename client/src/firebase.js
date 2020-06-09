
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


firebase.auth().onAuthStateChanged(function(user){
    if(user) {
        document.getElementById('user_div')
        document.getElementById('login_div')
    } else {
        document.getElementById('user_div')
        document.getElementById('login_div')
    }
});


function login() 

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    window.alert("Error: " + errorMessage);
});




// var provider = new firebase.auth.GoogleAuthProvider();
// const db = firebase.firestore();
// var userId;

// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         console.log(user);
//         userId = user.uid;
//         var uidDoc = db.collection("Users").doc(user.uid);
//         uidDoc.get().then(function (doc) {
//             if (doc.exists) {
//                 window.location = "/profile.html";
//             } else {
//                 db.collection("Users").doc(user.uid).set({
//                     name: user.displayName,
//                     items: [],
//                 })
//                     .then(function () {

//                         console.log("User Created!!!");
//                     })
//                     .catch(function (error) {
//                         console.log("Error writing user: ", error);
//                     }).finally(function () {
//                         window.location = "/genderPick.html";
//                     });
//             }
//         }).catch(function (error) {
//             console.log("Error getting user:", error);
//         })
//     } else {
//         console.log("TEST");
//         document.getElementById('fb').addEventListener("click", faceLogin);
//     }
// });

// function faceLogin() {
//     console.log('asdasdasd')
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         var token = result.credential.accessToken;
//         var user = result.user;
//         console.log(user);
//     }).catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//     });
// }