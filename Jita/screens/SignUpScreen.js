import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableWithoutFeedback,
	Switch,
	Keyboard,
	KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import 'firebase/firestore';

import AuthTextInput from '../components/AuthTextInput';
import Colors from '../constants/Colors';

const SignUpScreen = (props) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ student, setStudent ] = useState(false);

	const signUpHandler = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				if (student) {
					props.navigation.navigate('Registration')
				} else {
					props.navigation.navigate('Home')
				};
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<KeyboardAvoidingView style={styles.screen} behavior="padding">
				<Text style={styles.title}>Sign Up</Text>
				<View style={styles.signUpContainer}>
					<AuthTextInput
						onChangeText={(name) => setName(name)}
						icon="md-person"
						placeholder="Name"
						placeholderTextColor="white"
						value={name}
					/>
					<AuthTextInput
						onChangeText={(email) => setEmail(email)}
						icon="ios-mail"
						placeholder="Email"
						placeholderTextColor="white"
						keyboardType="email-address"
						value={email}
					/>
					<AuthTextInput
						onChangeText={(password) => setPassword(password)}
						icon="ios-lock"
						placeholder="Password"
						placeholderTextColor="white"
						secureTextEntry={true}
						value={password}
					/>

					<View style={styles.studentContainer}>
						<Ionicons name="md-school" size={25} color="white" />
						<Text style={styles.textInput}>Are you a student?</Text>
						<Switch
							value={student}
							onValueChange={(student) => {
								console.log(student)
								setStudent(student)
							}}
						/>
					</View>
				</View>

				<View style={styles.signUpButtonContainer}>
					<Button style={styles.signUpButton} title="Sign Up" color="white" onPress={signUpHandler} />
				</View>

				<View style={styles.logInContainer}>
					<Text style={styles.logInText}>Have an account? </Text>
					<Text
						style={styles.logInButton}
						onPress={() => {
							props.navigation.navigate('LogIn');
						}}
					>
						Log in
					</Text>
				</View>
			</KeyboardAvoidingView>
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
