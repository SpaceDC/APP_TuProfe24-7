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
  import FirstScreenTeacher from './screen/FirstScreenTeacher';
  import HomeScreen from './screen/HomeScreen';
  import RecoverPassword from './screen/RecoverPassword';
  import ChatScreen from './screen/ChatScreen';
  import Add from './components/main/Add';
  import Save from './components/main/Save';
  import Chat from './screen/Chat';
  import Chat2 from './screen/Chat2'; 

function MyStack () {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}> 
      {/*screenOptions... es para quitar la parte de arriba de todas las pantallas eso*/}  
      <Stack.Screen name = "StartScreen" component = {StartScreen}/>  
      <Stack.Screen name = "CreateUserScreen" component = {CreateUserScreen}/>
      <Stack.Screen name = "FirstScreen" component = {FirstScreen}/>
      <Stack.Screen name = "FirstScreenTeacher" component = {FirstScreenTeacher}/>
      <Stack.Screen name = "UserList" component = {UserList}/>
      <Stack.Screen name = "UserDetailScreen" component = {UserDetailScreen}/>
      <Stack.Screen name = "RecoverPassword" component = {RecoverPassword}/>
      <Stack.Screen name = "ChatScreen" component = {ChatScreen}/>
      <Stack.Screen name = "Add" component = {Add}/>
      <Stack.Screen name = "Save" component = {Save}/>
      <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
      <Stack.Screen name = "Chat" component = {Chat}/>
      <Stack.Screen name = "Chat2" component = {Chat2}/>
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
