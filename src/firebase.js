import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA2zvfBWd4MfYMbhpzgYjoVWbpRaWjdEHU",
    authDomain: "code-editor-be770.firebaseapp.com",
    projectId: "code-editor-be770",
    storageBucket: "code-editor-be770.appspot.com",
    messagingSenderId: "1090832750382",
    appId: "1:1090832750382:web:5b3f9fb2b566c689e70cbf"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}