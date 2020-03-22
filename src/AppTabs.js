import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTabBar from 'components/CustomTabBar';

import Notes from 'views/Notes';
import Tasks from 'views/Tasks';

const Tab = createMaterialTopTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Tasks" component={Tasks} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
