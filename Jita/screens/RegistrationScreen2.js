import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';

import AuthTextInput from '../components/AuthTextInput';
import NextButton from '../components/NextButton';
import Colors from '../constants/Colors';

const RegistrationScreen2 = (props) => {
   const currentUser = firebase.auth().currentUser

	const [ skill1, setSkill1 ] = useState('');
	const [ skill2, setSkill2 ] = useState('');
	const [ skill3, setSkill3 ] = useState('');

	const nextHandler = () => {
		const dbh = firebase.firestore();
		console.log('hello nextHandler2');
		try {
			dbh.collection('users').doc(currentUser.uid).set(
				{
					skill1: skill1,
					skill2: skill2,
					skill3: skill3
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
				<Text style={styles.title}>Let us know about your top skills.</Text>
			</View>
			<View style={styles.inputContainer}>
				<AuthTextInput
					placeholder="Skill #1"
					onChangeText={(skill1) => setSkill1(skill1)}
					placeholderTextColor="white"
					value={skill1}
				/>
				<AuthTextInput
					placeholder="Skill #2"
					onChangeText={(skill2) => setSkill2(skill2)}
					placeholderTextColor="white"
					value={skill2}
				/>
				<AuthTextInput
					placeholder="Skill #3"
					onChangeText={(skill3) => setSkill3(skill3)}
					placeholderTextColor="white"
					value={skill3}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<NextButton
					onPress={() => {
						nextHandler();
						props.navigation.navigate('Registration3');
					}}
				/>
			</View>
		</View>
	);
};
RegistrationScreen2.navigationOptions = (navData) => {
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

export default RegistrationScreen2;
