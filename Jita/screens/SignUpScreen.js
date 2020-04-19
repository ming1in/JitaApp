import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	TouchableWithoutFeedback,
	Switch,
	Keyboard,
	KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AuthTextInput from '../components/AuthTextInput';
import Colors from '../constants/Colors';

const SignUpScreen = (props) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setpassword ] = useState('');
	const [ student, setStudent ] = useState(false);

	const nameHandler = (name) => {
		setName(name);
	};

	const emailHandler = (email) => {
		setEmail(email);
	};

	const passwordHandler = (password) => {
		setpassword(password);
	};

	const signUpHandler = () => {
		console.log(name);
		console.log(email);
		console.log(password);
		console.log(student);
		props.navigation.navigate('Home');
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Sign Up</Text>

				<View style={styles.signUpContainer}>
					<AuthTextInput>
						<View style={styles.iconContainer}>
							<Ionicons name="md-person" size={25} color="white" />
						</View>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								onChangeText={nameHandler}
								placeholder="Name"
								placeholderTextColor="white"
							/>
						</View>
					</AuthTextInput>

					<AuthTextInput>
						<View style={styles.iconContainer}>
							<Ionicons name="ios-mail" size={25} color="white" />
						</View>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								onChangeText={emailHandler}
								placeholder="Email"
								placeholderTextColor="white"
							/>
						</View>
					</AuthTextInput>

					<AuthTextInput>
						<View style={styles.iconContainer}>
							<Ionicons name="ios-lock" size={25} color="white" />
						</View>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								onChangeText={passwordHandler}
								placeholder="Password"
								placeholderTextColor="white"
							/>
						</View>
					</AuthTextInput>

					<View style={styles.studentContainer}>
						<Ionicons name="md-school" size={25} color="white" />
						<Text style={styles.textInput}>Are you a student?</Text>
						<Switch
							value={student}
							onValueChange={(student) => {
								setStudent(student);
							}}
						/>
					</View>
				</View>

				<View style={styles.signUpButtonContainer}>
					<Button
						style={styles.signUpButton}
						title="Sign Up"
						color="white"
						onPress={() => {
							signUpHandler();
						}}
					/>
				</View>

				<View style={styles.logInContainer}>
					<Text style={styles.logInText}>Have an account? </Text>
					<Text
						style={styles.logInButton}
						onPress={() => {
							props.navigation.navigate('Login');
						}}
					>
						Log in
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.teal,
		alignItems: 'center'
	},
	title: {
		top: 95,
		color: 'white',
		fontSize: 72,
		width: 'auto'
	},
	signUpContainer: {
		width: '80%',
		alignItems: 'center',
		top: '30%'
	},
	signUpButtonContainer: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		width: '70%',
		top: '32%',
		borderWidth: 1,
		borderColor: 'white'
	},
	signUpButton: {
		flex: 1,
		width: '100%',
		color: 'white',
		fontSize: 18
	},
	textInputContainer: {
		alignContent: 'center',
		justifyContent: 'flex-start',
		marginBottom: 15
	},
	iconContainer: {
		marginRight: 20,
		marginBottom: 13,
		width: 20,
		alignItems: 'center'
	},
	textInput: {
		color: 'white',
		fontSize: 18,
		marginRight: 12
	},
	logInContainer: {
		flexDirection: 'row',
		top: '82%'
	},
	logInText: {
		color: 'white'
	},
	logInButton: {
		color: Colors.primary
	},
	studentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '85%'
	}
});

export default SignUpScreen;
