// firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
  databaseURL: "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
