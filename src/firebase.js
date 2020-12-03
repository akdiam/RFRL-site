import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyDCz9az54_FmVjELeZsQ3RF3dTEW5fVCRA",
    authDomain: "rfrl-3d4ed.firebaseapp.com",
    databaseURL: "https://rfrl-3d4ed.firebaseio.com",
    projectId: "rfrl-3d4ed",
    storageBucket: "rfrl-3d4ed.appspot.com",
    messagingSenderId: "527295930984",
    appId: "1:527295930984:web:7c0c6bfc96591bebf291dd",
    measurementId: "G-MEYPEQZXKT"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

const db = firebase.firestore();

export {db};