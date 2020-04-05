import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTabBar from 'components/CustomTabBar';

import NotesNav from 'navigators/NotesNav';
import NewsNav from 'navigators/NewsNav';

const Tab = createMaterialTopTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Notes" component={NotesNav} />
      <Tab.Screen name="News" component={NewsNav} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
