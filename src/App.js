import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import TabNavigator from 'components/TabNavigator';
import Profile from 'views/Profile';
import Home from 'views/Home';

const Tab = TabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
