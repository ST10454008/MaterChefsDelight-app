import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  LoginScreen from "./screens/Login";
import   HomeScreen from "./screens/Home";
import Menu from './screens/Menu';
import Login from './screens/Login';
import Home from './screens/Home';
import MenuForPP from './screens/MenuForPP';

const Stack = createStackNavigator();

export default function App() {

return(
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: true }}
        />

        <Stack.Screen
        name='Menuforpp'
        component={MenuForPP}
        options={{headerShown: true}}
        />

        

      </Stack.Navigator>
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
