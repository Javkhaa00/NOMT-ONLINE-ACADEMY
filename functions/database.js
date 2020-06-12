const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

const checkUsernames = (req, res) => {

    if (req.method !== 'GET') {
        return res.status(405).send(`${req.method} is not allowed. Use GET.`);
    }

    if (!req.query.hasOwnProperty('username')) {
        return res
            .status(400)
            .send('No username provided.');
    }

    // Source: https://stackoverflow.com/a/52850529/2758318
    const isValidDocId = id => id
        && /^(?!\.\.?$)(?!.*__.*__)([^/]{1,1500})$/
            .test(id);

    // Document Ids should be non-empty strings
    if (!isValidDocId(req.query.username)) {
        return res.status(400).send('Invalid username string.');
    }

    db
        .collection('users')
        .doc(req.query.id)
        .get()
        .then(doc => {
            /** If doc exists, the username is unavailable */
            return res.status(200).send(!doc.exists);
        })
        .catch(error => handleError(req, res));
};


module.exports = checkUsernames;
