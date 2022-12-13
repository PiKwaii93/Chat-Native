import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Platform, StatusBar, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/Home';
import DetailsScreen from './Screen/Details';
import LoginScreen from './Screen/Login';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74992e',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  global: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  globalBg:{
    backgroundColor: 'orange',
  }
});
