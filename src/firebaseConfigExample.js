// remove the Example part from the name and configure file accordingly
// this is just an exaple, fill in your own data from firebase
import Firebase from 'firebase'

var config = {
  apiKey: "3930483043824dfjdh32k4h3434",
  authDomain: "notarealapp.firebaseapp.com",
  databaseURL: "https://notarealapp.firebaseio.com",
  projectId: "notarealapp",
  storageBucket: "notarealapp.appspot.com",
  messagingSenderId: "98793740732439847324"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database(); // creating a reference to the database.
export const dbMenuRef = db.ref('menu') // reference to menu collection in the database
export const dbOrdersRef = db.ref('orders')