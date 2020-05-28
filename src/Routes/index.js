import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';



import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';

export const AppStack = createStackNavigator();

function Routes(){

return (
  <NavigationContainer>
     <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen  name="SignUp" component={SignUp}/>
          <AppStack.Screen  name="SignIn" component={SignIn}/>

          <AppStack.Screen  name="Welcome" component={Welcome}/>
          <AppStack.Screen  name="Dashboard" component={Dashboard}/>

   </AppStack.Navigator>
   </NavigationContainer>
   
) }

export default Routes;