import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Card from './Card';
import Colors from '../constants/Colors';


const UserCard = (props) => {
   return (
		<Card style={styles.card}>
			<View style={styles.topContainer}>
				<View style={styles.imageContainer}>
					<Image source={props.image} style={styles.image} />
				</View>
				<View style={styles.topTextContainer}>
               <Text style={styles.nameText}>{props.name}</Text>
               <Text style={styles.bioText}>{props.title}</Text>
            </View>
         </View>
         <View style={styles.bar} />
         <View style={styles.bottomTextContainer}>
            <Text style={{fontSize: 16, fontFamily:'inter-medium', marginBottom: 3}}>Skills</Text>
            <Text style={{ fontSize: 15, fontFamily: 'inter-regular' }}>{props.skillOne}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'inter-regular' }}>{props.skillTwo}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'inter-regular' }}>{props.skillThree}</Text>
         </View>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
      height: 200,
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 12,
		width: '100%'
	},
	imageContainer: {
		width: 80,
		height: 80,
		borderRadius: 63,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%'
	},
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
      width: "100%",
      marginBottom:3
	},
   topTextContainer: {
      justifyContent: "center",
      width: 185
	},
	nameText: {
		fontFamily: 'inter-semibold',
      fontSize: 24,
      marginVertical: 10
   },
   bioText: {
      fontFamily: 'inter-regular',
      fontSize: 15,
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
   bottomTextContainer: {
      width: '100%'
   }
});

export default UserCard;
