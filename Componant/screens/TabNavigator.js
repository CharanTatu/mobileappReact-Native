import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import MovieDetailScreen from './MovieDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'red',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Now Playing') {
          iconName = focused ? 'play-circle' : 'play-circle-outline';
        } else if (route.name === 'Popular') {
          iconName = focused ? 'flame' : 'flame-outline';
        } else if (route.name === 'Top Rated') {
          iconName = focused ? 'star' : 'star-outline';
        } else if (route.name === 'Upcoming') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen
      name="Now Playing"
      children={(props) => <HomeScreen {...props} category="now_playing" />}
    />
    <Tab.Screen
      name="Popular"
      children={(props) => <HomeScreen {...props} category="popular" />}
    />
    <Tab.Screen
      name="Top Rated"
      children={(props) => <HomeScreen {...props} category="top_rated" />}
    />
    <Tab.Screen
      name="Upcoming"
      children={(props) => <HomeScreen {...props} category="upcoming" />}
    />
  </Tab.Navigator>
);

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ title: 'Movie Details' }} />
    </Stack.Navigator>
  );
}
