import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../Test.js'
import Camera from '../Camera';
import Log from '../screens/Log'
import Home from '../screens/Home'
import Donor from '../screens/Donor.js';
import User from '../screens/User.js';
import Search from '../screens/Search.js';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Log" component={Log} options={{
          title: 'Blood Bank',
          headerStyle: {
            backgroundColor: '#4867AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />

<Stack.Screen name="Search" component={Search} options={{
          title: 'Blood Bank',
          headerStyle: {
            backgroundColor: '#4867AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />

      <Stack.Screen name="Donor" component={Donor} options={{
          title: 'Welcome to Donor Dashboard',
          headerStyle: {
            backgroundColor: '#4867AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />
      
      
        <Stack.Screen name="User" component={User} options={{
          title: 'Donor Dashboard',
          headerStyle: {
            backgroundColor: '#4867AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />
      
      <Stack.Screen name="Home" component={Home} options={{
          title: 'Welcome to Blood Bank',
          headerStyle: {
            backgroundColor: '#4867AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />
        
      
        
        <Stack.Screen name="Test" component={Test} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Camera" component={Camera} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;