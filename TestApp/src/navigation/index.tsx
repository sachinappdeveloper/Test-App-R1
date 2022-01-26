import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DashBoard from '../screens/DashBoard';
import Spendinglimit from '../screens/Spendinglimit';

const RootStack = createStackNavigator();

const Navigator = () => {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={TransitionScreenOptions}
        mode="modal"
        headerMode="none"
        initialRouteName="DashBoard">
        <RootStack.Screen name="DashBoard" component={DashBoard} />
        <RootStack.Screen name="Spendinglimit" component={Spendinglimit} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
