import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import * as Screens from './app/screens';
import {AuthContext} from './app/auth/AuthProvider';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen
      options={{headerShown: false}}
      name="Welcome"
      component={Screens.WelcomeScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Screens.ProfileScreen}
    />
    <Stack.Screen name="Create Case" component={Screens.CreateCaseScreen} />
    <Stack.Screen
      name="Login SignUp"
      component={Screens.LoginSignUpScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Your Cases" component={Screens.YourCaseScreen} />
    <Stack.Screen
      name="Transactions"
      component={Screens.TransactionHistoryScreen}
    />
    <Stack.Screen name="Appointments" component={Screens.AppointmentScreen} />
  </Stack.Navigator>
);

const App = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
