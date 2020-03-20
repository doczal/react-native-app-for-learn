import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from 'views/Notes';
import Tasks from 'views/Tasks';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="Profile" component={Tasks} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
