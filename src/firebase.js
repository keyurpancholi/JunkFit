import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyBJEJD_B9lt1A3YaNuA9rMGkqHAsOlQ0RY",
    authDomain: "junkfit-fb988.firebaseapp.com",
    projectId: "junkfit-fb988",
    storageBucket: "junkfit-fb988.appspot.com",
    messagingSenderId: "718819417786",
    appId: "1:718819417786:web:47e1a15a158561b6a12c83"
});

export const auth = app.auth();
const db = app.firestore()
export default app;
export {db}