import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const AppNavigator = createStackNavigator();

function AppRoutes(){
  return(
    <NavigationContainer independent={true}>
    <AppNavigator.Navigator >
         
    </AppNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes;