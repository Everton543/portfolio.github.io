// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4uVctovvf_64C9Ab6dUbYwey3oy0VcVc",
  authDomain: "portfolio-d6755.firebaseapp.com",
  projectId: "portfolio-d6755",
  storageBucket: "portfolio-d6755.appspot.com",
  messagingSenderId: "333195713390",
  appId: "1:333195713390:web:cfdc57c4fde4db2f63ff7f",
  databaseURL: "https://portfolio-d6755-default-rtdb.firebaseio.com/",
  measurementId: "G-FY13GN4LJG"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);


