import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NextButton = (props) => {
	return (
		<TouchableOpacity style={{ ...styles.buttonContainer, ...props.styles }} onPress={props.onPress}>
			<Text style={styles.text}>Next</Text>
			<Ionicons name="md-arrow-forward" size={24} color="white" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		borderColor: 'white',
		borderWidth: 2,
		width: 100,
		height: 40,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10
	},
	text: {
		color: 'white',
		fontFamily: 'inter-regular',
		fontSize: 15
	}
});

export default NextButton;
