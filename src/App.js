import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import TabNavigator from 'components/TabNavigator';
import Profile from 'views/Profile';
import Notes from 'views/Notes';

const Tab = TabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Tasks" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
