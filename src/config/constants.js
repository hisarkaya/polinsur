import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCzX7wKVZ5vzCt0tG1A50EraG8awTwvR38",
  authDomain: "polinsur-66a5c.firebaseapp.com",
  databaseURL: "https://polinsur-66a5c.firebaseio.com",
  projectId: "polinsur-66a5c",
  storageBucket: "polinsur-66a5c.appspot.com",
  messagingSenderId: "831209002920"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
