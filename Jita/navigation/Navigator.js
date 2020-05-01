import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoadingScreen from '../screens/LoadingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import Colors from '../constants/Colors';

const AuthNavigator = createSwitchNavigator(
	{
		SignUp: { screen: SignUpScreen },
		LogIn: { screen: LogInScreen },
	}
);

const ProfileTabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: <Ionicons name='ios-home' size={25} />
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: <Ionicons name='ios-home' size={25} />
			},
		},
	},
	{
		initialRouteName: 'Profile',
		tabBarOptions: {
			labelStyle: {
				fontSize: 20
			},
			activeTintColor: Colors.lightTeal
		}
	}
);

const MainNavigator = createSwitchNavigator({
	Loading: { screen: LoadingScreen },
	Auth: AuthNavigator,
	Home: ProfileTabNavigator
})

export default createAppContainer(MainNavigator);
