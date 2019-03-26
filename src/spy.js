import * as firebase from 'firebase/app';
import * as firebaseDb from 'firebase/database';

class CookieManager {
    constructor(doc) {
        this.doc = doc;
    }

    get(name) {
        const matches = this.doc.cookie.match(
            new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            )
        );

        return matches ? decodeURIComponent(matches[1]) : null;
    }

    set(name, value) {
        this.doc.cookie = name + "=" + encodeURIComponent(value);
    }

    remove(name) {
        this.setCookie(name, null);
    }
}

const Spy = () => {
    const cookie = new CookieManager(window.document);

    let id = cookie.get('id');
    if (!id) {
        const uuid = require('uuid');

        id = uuid.v4();

        cookie.set('id', id);
    }

    firebase.initializeApp({
        apiKey: "AIzaSyBh1rmGvLwOlCrwffuyOyprSk8KNnZwOA0",
        authDomain: "pchapl.firebaseapp.com",
        databaseURL: "https://pchapl.firebaseio.com",
        projectId: "pchapl",
        storageBucket: "pchapl.appspot.com",
        messagingSenderId: "880819585148"
    });

    const database = firebase.database();
    database.ref('log').push({
        message: 'hit',
        id: id,
        time: (new Date).valueOf()
    });
};

export {Spy};
