//import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  const Stack = createNativeStackNavigator();

  import UserList from './screen/UserList';
  import CreateUserScreen from './screen/CreateUserScreen';
  import UserDetailScreen from './screen/UserDetailScreen';
  import StartScreen from './screen/StartScreen';
  import FirstScreen from './screen/FirstScreen';
  import RecoverPassword from './screen/RecoverPassword';
  import ChatScreen from './screen/ChatScreen';

function MyStack () {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}> 
      {/*screenOptions... es para quitar la parte de arriba de todas las pantallas eso*/}  
      <Stack.Screen name = "StartScreen" component = {StartScreen}/>  
      <Stack.Screen name = "CreateUserScreen" component = {CreateUserScreen}/>
      <Stack.Screen name = "FirstScreen" component = {FirstScreen}/>
      <Stack.Screen name = "UserList" component = {UserList}/>
      <Stack.Screen name = "UserDetailScreen" component = {UserDetailScreen}/>
      <Stack.Screen name = "RecoverPassword" component = {RecoverPassword}/>
      <Stack.Screen name = "ChatScreen" component = {ChatScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
