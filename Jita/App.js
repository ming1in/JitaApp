import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'

import Navigator from './navigation/Navigator'
import FirebaseConfig from './config/Firebase'

firebase.initializeApp(FirebaseConfig)

export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
});
