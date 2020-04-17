/*
This is the Log In page. The Log In page feels the most sensical to be the ~home~
page for the app as this should be the first thing you see when loading the app
*/

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function LogIn({navigation}) {
  const [user, inputUser] = React.useState('');
  const [pass, inputPass] = React.useState('');
  const navSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <Text style={styles.text}>Jita</Text>
      </View>
      <View style={styles.login}>
        <TextInput
          style={styles.user}
          onChangeText={text => inputUser(text)}
          value={user}
          mode='flat'
          label='User'
          placeholder="Email"
        />
        <TextInput
          style={styles.pass}
          onChangeText={text => inputPass(text)}
          value={pass}
          mode='flat'
          label='Password'
          placeholder="Password"
        />
      </View>

      <View style={[{width:"80%", top:160}]}>
        <Button
          title='Log In'
          color='#252331'
        />
      </View>
      <View style={{top: '27%'}}>
        <Text style={styles.forget}>Forgot your password?</Text>
      </View>
      <View style={{flexDirection: 'row', top: '80%'}}>
        <Text style={styles.signUp}>Don't have an account? </Text>
        <Text style={styles.signButton} onPress={navSignUp}>Sign Up</Text>
      </View>
    </View>
  )
};

//style sheet of the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2D3C',
    alignItems: 'center',
  },
  text: {
    top: 130,
    color:'white',
    fontSize: 72,
    width: 'auto',
  },
  login: {
    top: 150,
    alignItems: 'center',
    paddingTop: 20,
    width: '80%'
  },
  user: {
    alignItems: 'center',
    alignContent: 'center',
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  pass: {
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    margin: 20,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  signUp: {
    color: 'rgba(151,150,157,0.5)',
  },
  signButton: {
    color: 'rgba(75,217,191,0.5)',
  },
  forget: {
    color: 'rgba(151,150,157,0.5)',
  }
});
