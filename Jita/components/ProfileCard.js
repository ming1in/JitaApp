import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Card from './Card';
import Colors from '../constants/Colors';

const DefaultText = (props) => {
   return (      
      <View style={styles.textContainer}>
         <Text style={styles.text}>- {props.children}</Text>
   </View>
   )
}

const ProfileCard = (props) => {
   return (
		<Card style={{ ...styles.card, ...props.style }}>
         <View style={styles.titleContainer}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
         <View style={styles.bar} />
         <DefaultText>{props.inputOne}</DefaultText>
         <DefaultText>{props.inputTwo}</DefaultText>
         <DefaultText>{props.inputThree}</DefaultText>
         <View>
         
         </View>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
		height: 180,
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 12,
      width: "87%"
	},
	bar: {
      height: 2,
      borderRadius: 2,
		width: '100%',
		backgroundColor: Colors.teal,
		justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5
   },
   titleContainer: {
      width: '100%',
      marginVertical: 8
   },
   title: {
      fontFamily: 'inter-medium',
      fontSize: 20
   },
   textContainer: {
      width: '100%'
   },
   text: {
      fontFamily: 'inter-light',
      fontSize: 18,
      margin: 5
   }
});

export default ProfileCard;
