import firebase from 'firebase' 



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu6BF22xNdFP15sBMDw2GPgAD-X-V4GjE",
    authDomain: "fir-aae5a.firebaseapp.com",
    projectId: "fir-aae5a",
    storageBucket: "fir-aae5a.appspot.com",
    messagingSenderId: "344835746152",
    appId: "1:344835746152:web:ae9e2c45036eaa06b3cedd",
    measurementId: "G-YR8BSVD88C"
  };

 export const Firebase = firebase.initializeApp(firebaseConfig)