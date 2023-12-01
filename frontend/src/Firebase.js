// firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAuJMa_ODFS06DHoK25kxkbY46wajkTuT4",
  databaseURL: "https://andon-73506-default-rtdb.asia-southeast1.firebasedatabase.app",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
