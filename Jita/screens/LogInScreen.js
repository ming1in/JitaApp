import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AuthTextInput from '../components/AuthTextInput';
import Colors from '../constants/Colors';

const LogInScreen = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const emailHandler = (email) => {
		setEmail(email);
	};

	const passwordHandler = (password) => {
		setPassword(password);
	};

	const logInHandler = () => {
		console.log(email);
		console.log(password);
		props.navigation.navigate('Home');
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Jita</Text>
				</View>
				<View style={styles.loginContainer}>
					<AuthTextInput
						onChangeText={emailHandler}
						placeholder="Email"
						icon="ios-mail"
						placeholderTextColor={Colors.lightGrey}
					/>
					<AuthTextInput
						onChangeText={passwordHandler}
						placeholder='Password'
						icon='ios-lock'
						placeholderTextColor={Colors.lightGrey}
						secureTextEntry={true}
					/>
				</View>

				<View style={styles.logInButtonContainer}>
					<Button
						title="Log In"
						color="#97969D"
						onPress={() => {
							logInHandler();
						}}
					/>
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
			</View>
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
		top: '330%',
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
