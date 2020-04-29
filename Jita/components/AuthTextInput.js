import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ShadowPropTypesIOS} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const AuthTextInput = (props) => {

  return (
    <View style={{...styles.authTextInput, ...props.styles}}>
      <View style={styles.iconContainer}>
        <Ionicons name={props.icon} size={25} color="white" />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          value={props.value}
        />
      </View>
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
    paddingLeft: 5,
    marginVertical: 20
  },
  textInput: {
    color: 'white',
    fontSize: 18,
    width: '100%'
  },
  textInputContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  iconContainer: {
    marginRight: 20,
    marginBottom: 13,
    width: 20
  },
});

export default AuthTextInput