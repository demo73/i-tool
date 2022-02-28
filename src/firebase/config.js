import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDyTBLrbwNyAgRyLiVVq1Fa4MKSn41WeQA",
  authDomain: "jdi-tool.firebaseapp.com",
  projectId: "jdi-tool",
  storageBucket: "jdi-tool.appspot.com",
  messagingSenderId: "93106055502",
  appId: "1:93106055502:web:3ab54142f52e61578e161f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };