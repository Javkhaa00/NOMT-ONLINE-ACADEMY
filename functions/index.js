const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.app = functions.https.onRequest(app);