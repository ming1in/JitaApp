import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, SafeAreaView, Button } from 'react-native';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';

import Colors from '../constants/Colors';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';

const ProfileScreen = (props) => {
	const currentUser = firebase.auth().currentUser
	const [userData, setUserData] = useState(null)

	const currentUserData = useEffect(() => {
		const docRef = firebase.firestore().collection("users").doc(currentUser.uid)

		docRef.get().then(function (doc) {
			if (doc.exists) {
				console.log("Document data:", doc.data());
				setUserData(doc.data())
			} else {
				console.log("No such document!");
			}
		}).catch(function (error) {
			console.log("Error getting document:", error);
		});
	},[currentUser])

	return (
		<SafeAreaView style={styles.screen}>
			<ScrollView>
				<View>
					<View style={styles.headerContainer}>
						<View style={styles.imageContainer}>
							<Image source={require('../assets/person1.jpg')} style={styles.image} />
						</View>
						<Card style={styles.headerCard}>
							<Text style={styles.headerText}>Stevens Institute of Technology</Text>
							<Text style={styles.headerText}>Computer Science</Text>
						</Card>
					</View>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>John Diggle</Text>
					</View>
					<View style={styles.profileCardContainer}>
						<ProfileCard
							title="Skills"
							inputOne='Object-Oriented Programming' 
							inputTwo='Full Stack Development'
							inputThree='Mobile App Development'
						/>
						<ProfileCard
							title="Experience"
							inputOne='Data Analytics Intern'
							inputTwo='Lead Software Developer'
							inputThree='UI/UX Designer'
						/>
						<ProfileCard
							title="Projects"
							inputOne='Human Genome Project'
							inputTwo='Tesla Automation System'
							inputThree='macOS Catalina'
						/>
					</View>
				</View>
				<Button
					title='Log out'
					onPress={() => {
						firebase.auth().signOut().then(() => {
							props.navigation.navigate('Auth')
						})
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 125,
		height: 125,
		borderRadius: 63,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	headerCard: {
		height: 110,
		width: 200,
		marginLeft: 1,
		backgroundColor: Colors.teal,
		justifyContent: 'center'
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '100%',
	},
	headerText: {
		fontSize: 16,
		fontFamily: 'inter-semibold',
		color: 'white',
		marginVertical: 3
	},
	nameContainer: {
      paddingLeft: 25,
      marginBottom: 8
	},
	name: {
		fontFamily: 'inter-bold',
		fontSize: 32,
		color: 'white'
   },
   profileCardContainer: {
      alignItems: "center"
   }
});

export default ProfileScreen;
