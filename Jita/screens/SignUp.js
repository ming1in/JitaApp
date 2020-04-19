/*
This is the sign up page.
I replaced the Button tag with Touchable to make it look nicer.
*/

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity} from 'react-native';
import { UserAuthInput } from '../components/UserAuthInput';

export default function SignUp(){
  const [name, inputName] = React.useState('');
  const [user, inputUser] = React.useState('');
  const [pass, inputPass] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign Up</Text>
      <View style={styles.signUpSheet}>
        <UserAuthInput placeholder="Your Name" textColor='white'/>
        <UserAuthInput placeholder="Email" textColor='white'/>
        <UserAuthInput placeholder="Password" textColor='white' secure={true}/>
      </View>
      <View style={{top:110}}>
        <Text>Not sure what we want to do for the student check box</Text>
      </View>
      <View style={[{width:"80%", top:140, borderWidth:1, borderColor:'white'}]}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={{color: 'white', fontSize: 18}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BD9BF',
    alignItems: 'center',
  },
  titleText: {
    top: 95,
    color:'white',
    fontSize: 72,
    width: 'auto',
  },
  signUpSheet: {
    width: '80%',
    alignItems: 'center',
    top: 90,
  },
  signUpButton: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
