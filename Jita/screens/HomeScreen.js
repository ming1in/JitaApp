import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from 'firebase'
import 'firebase/firestore';

import Colors from '../constants/Colors';

const HomeScreen = (props) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const initialState = firebase.auth();
        return initialState
    });

	return (
		<View style={styles.screen}>
			<Text>Hello Home Screen</Text>
			<Button
				title='ProfileScreen'
				onPress={() => {
					props.navigation.navigate('Profile')
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default HomeScreen;
