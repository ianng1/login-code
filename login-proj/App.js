import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'


import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import MainScreen from './src/screens/MainScreen'
import AccountScreen from './src/screens/AccountScreen'


import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';



const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({

    listFlow: createStackNavigator({
      Main: MainScreen
    }),
    Account: AccountScreen
  }),


})


const App = createAppContainer(switchNavigator);


export default () => {
  return (
    <AuthProvider>
      <App ref= {(navigator)=> {setNavigator(navigator)}}/>
    </AuthProvider>
  )
}
