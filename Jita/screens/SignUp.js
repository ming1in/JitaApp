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

export default function SignUp(){
  const [name, inputName] = React.useState('');
  const [user, inputUser] = React.useState('');
  const [pass, inputPass] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign Up</Text>
      <View style={styles.signUpSheet}>
        <TextInput
          style={styles.name}
          onChangeText={text => inputName(text)}
          value={name}
          mode='flat'
          label='Name'
          placeholder="Your Name"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.user}
          onChangeText={text => inputUser(text)}
          value={user}
          mode='flat'
          label='User'
          placeholder="Email"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.pass}
          onChangeText={text => inputPass(text)}
          value={pass}
          mode='flat'
          label='Password'
          placeholder="Password"
          placeholderTextColor='white'
        />
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
  name: {
    alignItems: 'center',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  user: {
    alignItems: 'center',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  pass: {
    alignItems: 'center',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  signUpButton: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
