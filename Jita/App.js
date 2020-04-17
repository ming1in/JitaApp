/*
The main app exported to the phone. This should not be changed be changed
unless we need to edit how the app initialises
*/

import React, {Component} from 'react';
import Expo from 'expo';
import Navigator from './routes/MainRoute'

export default function App(){
  return (
    <Navigator />
  )
}
