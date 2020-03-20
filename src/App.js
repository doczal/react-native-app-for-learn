import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import TabNavigator from 'components/TabNavigator';

import Notes from 'views/Notes';
import Tasks from 'views/Tasks';

const Tab = TabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
