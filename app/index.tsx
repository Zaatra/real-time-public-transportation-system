import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import DriverDashboard from "./screens/DriverDashboard";
import MyProfile from "./screens/MyProfile";
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen'; // Import your AuthScreen component

const Tab = createBottomTabNavigator();

const tabBarIcon = ({ focused, color, size, route }: {
  focused: boolean;
  color: string;
  size: number;
  route: any;
}) => {
  let iconName;

  if (route.name === "Dashboard") {
    iconName = focused ? "speedometer" : "speedometer-outline";
  } else if (route.name === "My Profile") {
    iconName = focused ? "person-circle" : "person-circle-outline";
  } else if (route.name === 'Splash') { // Add icon for Splash screen
    iconName = focused ? 'home' : 'home-outline';
  } else {
    iconName = "information-circle-outline"; 
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIcon({ focused, color, size, route }),
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Splash" component={SplashScreen} /> 
      <Tab.Screen name="Dashboard" component={DriverDashboard} />
      <Tab.Screen name="My Profile" component={MyProfile} />
      <Tab.Screen name="Auth" component={AuthScreen} /> 
    </Tab.Navigator>
  );
}