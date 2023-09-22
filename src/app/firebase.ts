// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsLl9MrEQlgWsXyhoKB_Bj_dc7DpSak8w",
  authDomain: "parkour-dev-test.firebaseapp.com",
  projectId: "parkour-dev-test",
  storageBucket: "parkour-dev-test.appspot.com",
  messagingSenderId: "704284007856",
  appId: "1:704284007856:web:663d3a4f7591d3ebe74a75"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };