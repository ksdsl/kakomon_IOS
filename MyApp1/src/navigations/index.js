import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SelectexamScreen from '../screens/SelectexamScreen';
import ViewPNGScreen from '../screens/ViewPNGScreen';


const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Detail" component={DetailScreen} />
        <RootStack.Screen name="Selectexam" component={SelectexamScreen} />
        <RootStack.Screen name="ViewPNG" component={ViewPNGScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;