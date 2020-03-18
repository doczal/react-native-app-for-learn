import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './img/games.svg';
import ProfileIcon from './img/dahead.svg';

import Home from './views/Home';
import Profile from './views/Profile';

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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home2" component={Home} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
