import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTabBar from 'components/CustomTabBar';
import { Provider } from 'react-redux';
import store from 'redux/store';

import NotesNav from 'navigators/NotesNav';
import NewsNav from 'navigators/NewsNav';

const Tab = createMaterialTopTabNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="News"
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Notes" component={NotesNav} />
        <Tab.Screen name="News" component={NewsNav} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
