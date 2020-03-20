import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './img/games.svg';
import ProfileIcon from './img/dahead.svg';

import Tasks from './views/Tasks';
import Notes from './views/Notes';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabScreenOpts = ({ route }) => ({
  tabBarIcon: () => {
    if (route.name === 'Home') return <HomeIcon />;
    else return <ProfileIcon />;
  },
});

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={tabScreenOpts}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
