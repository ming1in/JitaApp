/*
This is where you add screens to the app, or pages. Like how the log in
and sign up pages are different screens. This is how we navigate through the
app. Whenever a new page is added, you must import the seperate js file for
the screen from the screens folder. Follow whats written below as a guideline
*/

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'

const screens = {
  LogIn: {
    screen: LogIn
  },
  SignUp: {
    screen: SignUp
  }
}

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
