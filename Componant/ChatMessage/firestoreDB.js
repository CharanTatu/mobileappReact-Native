import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBKDGq6UOcWffk2NaqD5I5WbeZ2EMlPxzY",
    authDomain: "messagechatrn.firebaseapp.com",
    projectId: "messagechatrn",
    storageBucket: "messagechatrn.appspot.com",
    messagingSenderId: "463274600341",
    databaseURL: 'https://console.firebase.google.com/u/0/project/messagechatrn/firestore/data/~2F',
    appId: "1:463274600341:android:5fa94bb6c7b85ee357789c",
    measurementId: "G-DW5CXRREZ5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();