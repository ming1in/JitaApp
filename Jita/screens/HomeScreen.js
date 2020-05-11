import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

import UserCard from '../components/UserCard';
import Colors from '../constants/Colors';

const HomeScreen = (props) => {
	const [ currentUser, setCurrentUser ] = useState(() => {
		const initialState = firebase.auth();
		return initialState;
	});

	return (
		<SafeAreaView style={styles.screen}>
			<ScrollView>
				<View style={styles.cardContainer}>
					<UserCard
						image={require('../assets/person1.jpg')}
						name='John Diggle'
						title='Computer Science'
						skillOne='Object-Oriented Programming'
						skillTwo='Full Stack Development'
						skillThree='Mobile App Development'
					/>
					<UserCard
						image={require('../assets/person2.jpg')}
						name='Barry Allen'
						title='Software Engineering'
						skillOne='Python (Programming Language)'
						skillTwo='Node.js '
						skillThree='Leadership'
					/>
					<UserCard
						image={require('../assets/person3.jpg')}
						name='Laurel Lance'
						title='Quanitative Finance'
						skillOne='Public Speaking'
						skillTwo='Python'
						skillThree='Java'
					/>
					<UserCard
						image={require('../assets/person4.jpg')}
						name='Felicity Smoak'
						title='Finance'
						skillOne='Microsoft Office'
						skillTwo='Leadership'
						skillThree='Public Speaking'
					/>
					<UserCard
						image={require('../assets/person5.jpg')}
						name='Oliver Queen'
						title='Business and Technology'
						skillOne='Social Media'
						skillTwo='Networking'
						skillThree='Marketing'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	cardContainer: {
		alignItems: 'center',
		width: 325
	}
});

export default HomeScreen;
