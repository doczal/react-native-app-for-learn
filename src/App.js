import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import TabNavigator from 'components/TabNavigator';
import { Provider } from 'react-redux';
import store from 'redux/store';

import Notes from 'views/Notes';
import Tasks from 'views/Tasks';

const Tab = TabNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Notes" component={Notes} />
        <Tab.Screen name="Tasks" component={Tasks} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
