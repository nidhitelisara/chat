import firebase from 'firebase'

import 'firebase/firestore';
const firebaseApp = firebase.initializeApp({

apiKey: "AIzaSyDFA8GKwlsuQlvUcUKNko2UzknsxHF3P_A",
authDomain: "firechat-b6d58.firebaseapp.com",
projectId: "firechat-b6d58",
storageBucket: "firechat-b6d58.appspot.com",
messagingSenderId: "265683414263",
appId: "1:265683414263:web:9b524caacf6ca27d4e37f2",
measurementId: "G-F81WP5ZC6Q"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }