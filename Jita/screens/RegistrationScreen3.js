import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';

import AuthTextInput from '../components/AuthTextInput';
import NextButton from '../components/NextButton';
import Colors from '../constants/Colors';

const RegistrationScreen3 = (props) => {
   const currentUser = firebase.auth().currentUser

	const [ experience1, setExperience1 ] = useState('');
	const [ experience2, setExperience2 ] = useState('');
	const [ experience3, setExperience3 ] = useState('');

	const nextHandler = () => {
		const dbh = firebase.firestore();
		console.log('hello nextHandler3');
		try {
			dbh.collection('users').doc(currentUser.uid).set(
				{
					experience1: experience1,
					experience2: experience2,
					experience3: experience3
				},
				{ merge: true }
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.screen}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Tell us about your past job experiences.</Text>
			</View>
			<View style={styles.inputContainer}>
				<AuthTextInput
					placeholder="Experience #1"
					onChangeText={(experience1) => setExperience1(experience1)}
					placeholderTextColor="white"
					value={experience1}
				/>
				<AuthTextInput
					placeholder="Experience #2"
					onChangeText={(experience2) => setExperience2(experience2)}
					placeholderTextColor="white"
					value={experience2}
				/>
				<AuthTextInput
					placeholder="Experience #3"
					onChangeText={(experience3) => setExperience3(experience3)}
					placeholderTextColor="white"
					value={experience3}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<NextButton
					onPress={() => {
						nextHandler();
                  props.navigation.navigate('Home');
					}}
				/>
			</View>
		</View>
	);
};

RegistrationScreen3.navigationOptions = (navData) => {
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
	titleContainer: {
		width: '85%'
	},
	inputContainer: {
		marginTop: 96
	},
	buttonContainer: {
		width: '75%',
		flexDirection: 'row-reverse'
	}
});

export default RegistrationScreen3;
