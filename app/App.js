import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//  Import ONLY the screens used in App.js (the tabs handle their own screen imports)
import AuthScreen from './screens/AuthScreen'; 
import SplashScreen from './screens/SplashScreen';
import Index from './index'; // Your tab navigator setup

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); //  Not used here directly, imported in Index.js

// Remove types, as they are only for TypeScript: 
const tabBarIcon = ({ focused, color, size, route }) => {
  let iconName;

  if (route.name === 'Dashboard') {
    iconName = focused ? 'speedometer' : 'speedometer-outline';
  } else if (route.name === 'My Profile') {
    iconName = focused ? 'person-circle' : 'person-circle-outline';
  } else if (route.name === 'Splash') {
    iconName = focused ? 'home' : 'home-outline';
  } else {
    iconName = 'information-circle-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="SplashScreen"> 
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Tabs" component={Index} options={{ headerShown: false }} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App; 