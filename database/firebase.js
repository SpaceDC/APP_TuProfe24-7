import * as firebase from 'firebase'
import firestore from 'firebase/firestore'
import 'firebase/auth'
//import '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCeu0Iw0mgBnkUuc3B86JCgYnv6zFZoAMg",
  authDomain: "bdtuprofe24-7.firebaseapp.com",
  projectId: "bdtuprofe24-7",
  storageBucket: "bdtuprofe24-7.appspot.com",
  messagingSenderId: "526479134362",
  appId: "1:526479134362:web:07fbce512d15ccca415923"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const auth = firebase.auth();
const db =firebase.firestore();

export default firebase;
export { db, auth };