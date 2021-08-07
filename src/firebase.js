import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnUugDyNEfeS3zI6AMXKfxvr9ZbyMXW7I",
  authDomain: "shoenique-48ba0.firebaseapp.com",
  projectId: "shoenique-48ba0",
  storageBucket: "shoenique-48ba0.appspot.com",
  messagingSenderId: "290562727698",
  appId: "1:290562727698:web:3f53580769a925fd9b1dcb",
  measurementId: "G-4HYCZY0PB8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
