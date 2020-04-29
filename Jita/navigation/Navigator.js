import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator'
import HomeScreen from '../screens/HomeScreen'

const Navigator = createSwitchNavigator(
   {
      Auth: AuthNavigator,
      Home: HomeScreen
   },
   {
      initialRouteName: 'Auth'
   }
);

export default createAppContainer(Navigator);