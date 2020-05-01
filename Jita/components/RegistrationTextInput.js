import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ShadowPropTypesIOS} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const RegistrationTextInput = (props) => {
    const [value, onChangeText] = React.useState('');

    const changeTextHandler = (value) => {
        onChangeText(value)
        props.setValue(value)
    }

    return (
        <View style={{...styles.authTextInput, ...props.styles}}>
            <View style={styles.iconContainer}>
                <Ionicons name={props.icon} size={25} color="white" />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={changeTextHandler}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    value={value}
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
        marginBottom: 15,
        fontFamily: 'inter-bold'
    },
    iconContainer: {
        marginRight: 20,
        marginBottom: 13,
        width: 20
    },
});

export default RegistrationTextInput
