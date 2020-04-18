import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const UserAuthInput = (props) => {
  const [name, inputName] = React.useState('');

  return (
    <TextInput
      style={styles.userAuth}
      onChangeText={text => inputName(text)}
      value={name}
      mode='flat'
      placeholder={props.text}
      placeholderTextColor={props.textColor}
    />
  )
}

const styles = StyleSheet.create({
  userAuth: {
    alignItems: 'center',
    alignContent: 'center',
    color: 'white',
    fontSize: 20,
    margin: 5,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  }
});

export { UserAuthInput };
