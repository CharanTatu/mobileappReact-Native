import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Now Playing" children={() => <HomeScreen category="now_playing" />} />
      <Tab.Screen name="Popular" children={() => <HomeScreen category="popular" />} />
      <Tab.Screen name="Top Rated" children={() => <HomeScreen category="top_rated" />} />
      <Tab.Screen name="Upcoming" children={() => <HomeScreen category="upcoming" />} />
    </Tab.Navigator>
  );
};

export default TabNavigator;