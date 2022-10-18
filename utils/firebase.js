import firebase from 'firebase/app'
import 'firebase/firestore'
//esta constante es del firebase web
const firebaseConfig = {
    apiKey: "AIzaSyDo92IJ-1lHHdFRamu3uCfaFm9ce1CoPbw",
    authDomain: "appmensajesuam.firebaseapp.com",
    projectId: "appmensajesuam",
    storageBucket: "appmensajesuam.appspot.com",
    messagingSenderId: "477466719210",
    appId: "1:477466719210:web:0a0847fcf813942f2bb893",
    measurementId: "G-25QF6M6T6G"
  };
  
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  //onst analytics = getAnalytics(app);