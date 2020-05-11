import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';

import AuthTextInput from '../components/AuthTextInput';
import NextButton from '../components/NextButton';
import Colors from '../constants/Colors';

const RegistrationScreen1 = (props) => {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ name, setName ] = useState('');
	const [ major, setMajor ] = useState('');
	const [ grad, setGrad ] = useState('');

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});
	});

	const nextHandler = () => {
		const dbh = firebase.firestore();
		console.log('hello nextHandler');
		try {
			dbh.collection('users').doc(currentUser.uid).set(
				{
					email: currentUser.email,
					name: name,
					major: major,
					grad: grad
				},
				{ merge: true }
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.screen}>
			<View>
				<Text style={styles.title}>Tell us a bit about yourself.</Text>
			</View>
			<View style={styles.inputContainer}>
				<AuthTextInput
					placeholder="Name"
					onChangeText={(name) => setName(name)}
					placeholderTextColor="white"
					value={name}
				/>
				<AuthTextInput
					placeholder="What is your major?"
					onChangeText={(major) => setMajor(major)}
					placeholderTextColor="white"
					value={major}
				/>
				<AuthTextInput
					placeholder="What is your graduation date?"
					onChangeText={(grad) => setGrad(grad)}
					placeholderTextColor="white"
					value={grad}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<NextButton
					onPress={() => {
						nextHandler();
						props.navigation.navigate({
							routeName: 'Registration2',
							params: {
								currentUser: currentUser
							}
						});
					}}
				/>
			</View>
		</View>
	);
};

RegistrationScreen1.navigationOptions = (navData) => {
	return {
		headerTitle: 'Registration'
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.teal
	},
	title: {
		color: 'white',
		fontFamily: 'inter-medium',
		fontSize: 36
	},
	inputContainer: {
		marginTop: 96
	},
	buttonContainer: {
		width: '75%',
		flexDirection: 'row-reverse'
	}
});

export default RegistrationScreen1;
