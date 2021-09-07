import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuTMdOPwc1ZhQlvc6BGx8dI1TuJ1dPrjU",
  authDomain: "attendance-app-a2e7d.firebaseapp.com",
  databaseURL: "https://attendance-app-a2e7d-default-rtdb.firebaseio.com",
  projectId: "attendance-app-a2e7d",
  storageBucket: "attendance-app-a2e7d.appspot.com",
  messagingSenderId: "592515608667",
  appId: "1:592515608667:web:a0153547621c80924f4f7e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default  firebase.database()
 
 

  