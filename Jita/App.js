import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import firebase from 'firebase'

import Navigator from './navigation/Navigator'
import FirebaseConfig from './config/Firebase'

firebase.initializeApp(FirebaseConfig)

const fetchFonts = () => {
  return Font.loadAsync({
    'inter-black': require('./assets/fonts/Inter-Black.ttf'),
    'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
    'inter-extra-bold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'inter-extra-light': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'inter-light': require('./assets/fonts/Inter-Light.ttf'),
    'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
    'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-thin': require('./assets/fonts/Inter-Thin.ttf'),

  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
  }

  return (
      <Navigator/>
  );
}
