//Firebase was giving me a hard time on my emulator. Looks like andorid didnt
//like me using fierbase without downloading it for android studio

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import firebase from 'react-native-firebase'

/* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_aIGfEqpbQwTI6NwboN_NwSYoKgNwfW4",
  authDomain: "jita-bc882.firebaseapp.com",
  databaseURL: "https://jita-bc882.firebaseio.com",
  projectId: "jita-bc882",
  storageBucket: "jita-bc882.appspot.com",
  messagingSenderId: "894428466715",
  appId: "1:894428466715:web:3028cd3f799084a4c032be",
  measurementId: "G-MS5EB89E5T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
*/

import Navigator from './navigation/Navigator'

export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
});
