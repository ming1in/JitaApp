import React, { useState, useEffect, useCallback } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Alert
} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

import AuthTextInput from '../components/AuthTextInput';
import Colors from '../constants/Colors';

const LogInScreen = (props) => {
	const [ email, setEmail ] = useState('');
	const [password, setPassword] = useState('');

	const logInHandler = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => 
				props.navigation.navigate('Home')
			)
			.catch((error) => {
				alert(error)
			});
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<KeyboardAvoidingView style={styles.screen} behavior="padding">
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Jita</Text>
				</View>
				<View style={styles.loginContainer}>
					<AuthTextInput
						onChangeText={(email) => setEmail(email)}
						value={email}
						placeholder="Email"
						icon="ios-mail"
						placeholderTextColor={Colors.lightGrey}
						keyboardType="email-address"
					/>
					<AuthTextInput
						onChangeText={(password) => setPassword(password)}
						value={password}
						placeholder="Password"
						icon="ios-lock"
						placeholderTextColor={Colors.lightGrey}
						secureTextEntry={true}
					/>
				</View>

				<View style={styles.logInButtonContainer}>
					<Button title="Log In" color="#97969D" onPress={logInHandler} />
				</View>

				<View style={styles.forgotContainer}>
					<Text style={styles.forgotText}>Forgot your password?</Text>
				</View>

				<View style={styles.signUpContainer}>
					<Text style={styles.signUpText}>Don't have an account? </Text>
					<Text
						style={styles.signUpButton}
						onPress={() => {
							props.navigation.navigate('SignUp');
						}}
					>
						Sign Up
					</Text>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.primary,
		alignItems: 'center'
	},
	title: {
		top: '250%',
		color: 'white',
		fontSize: 72,
		width: 'auto'
	},
	loginContainer: {
		top: '40%',
		alignItems: 'center',
		marginTop: 20,
		width: '80%'
	},
	logInButtonContainer: {
		backgroundColor: '#252331',
		justifyContent: 'center',
		width: '70%',
		height: 50,
		top: '42%'
	},
	forgotContainer: {
		top: '43%'
	},
	forgotText: {
		color: Colors.lightGrey
	},
	signUpContainer: {
		flexDirection: 'row',
		top: '100%'
	},
	signUpText: {
		color: Colors.lightGrey
	},
	signUpButton: {
		color: Colors.lightTeal
	},
	textInput: {
		color: 'white',
		fontSize: 18
	}
});

export default LogInScreen;
