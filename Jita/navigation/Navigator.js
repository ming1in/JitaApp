import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import Colors from '../constants/Colors';
import RegistrationScreen1 from '../screens/RegistrationScreen1';
import RegistrationScreen2 from '../screens/RegistrationScreen2';
import RegistrationScreen3 from '../screens/RegistrationScreen3';

const AuthNavigator = createSwitchNavigator({
	LogIn: { screen: LogInScreen },
	SignUp: { screen: SignUpScreen }
});

const ProfileTabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <AntDesign name="home" size={40} color={tabInfo.tintColor} />;
				},
				tabBarLabel: <Text style={{ fontFamily: 'inter-bold' }}>Home</Text>
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <FontAwesome5 name="user" size={35} color={tabInfo.tintColor} />;
				},
				tabBarLabel: <Text style={{ fontFamily: 'inter-bold' }}>Profile</Text>
			}
		}
	},
	{
		initialRouteName: 'Profile',
		tabBarOptions: {
			activeTintColor: Colors.teal,
			inactiveTintColor: 'white',
			showLabel: false,
			style: {
				alignItems: 'center',
				justifyContent: 'center',
				paddingTop: 12,
				backgroundColor: '#0B0A11'
			}
		}
	}
);

const RegistrationNavigator = createStackNavigator(
	{
		Registration1: { screen: RegistrationScreen1 },
		Registration2: { screen: RegistrationScreen2 },
		Registration3: { screen: RegistrationScreen3 }
	},
	{
		headerTitle: 'Registration',
		headerTintColor: Colors.teal,
		headerTitleStyle: {
			fontFamily: 'inter-bold'
		}
	}
);

const MainNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	Registration: RegistrationNavigator,
	Home: ProfileTabNavigator
});

export default createAppContainer(MainNavigator);
