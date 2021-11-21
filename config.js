import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAKt9C5ZBYzQP2rT3MayG8P1jLLLtXqvY4",
  authDomain: "project67-e5106.firebaseapp.com",
  projectId: "project67-e5106",
  storageBucket: "project67-e5106.appspot.com",
  messagingSenderId: "684162870172",
  appId: "1:684162870172:web:8560bdb2cca59b6a16f659"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();