import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const AuthTextInput = (props) => {

  return (
    <View style={styles.authTextInput}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  authTextInput: {
    flexDirection: 'row',
    height: 40,
    width: 285,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    margin: 20,
    paddingLeft: 5
  },
  textInput: {
    color: 'white',
    fontSize: 18,
  },
  textInputContainer: {
    alignContent:'center',
    justifyContent: 'flex-start',
    marginBottom: 15
  },
  iconContainer: {
    marginRight: 20,
    marginBottom: 13,
    width: 20
  }
});

export default AuthTextInput