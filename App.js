import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import * as Screens from './app/screens';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name="Welcome"
      component={Screens.WelcomeScreen}
    />
    <Stack.Screen name="Profile" component={Screens.ProfileScreen} />
    <Stack.Screen name="Create Case" component={Screens.CreateCaseScreen} />
    <Stack.Screen name="Login SignUp" component={Screens.LoginSignUpScreen} />
    <Stack.Screen name="Your Cases" component={Screens.YourCaseScreen} />
    <Stack.Screen
      name="Transactions"
      component={Screens.TransactionHistoryScreen}
    />
    <Stack.Screen name="Appointments" component={Screens.AppointmentScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
