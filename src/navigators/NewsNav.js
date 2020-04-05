import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsList from 'views/NewsList';
import { colors } from 'styles';

const Stack = createStackNavigator();

const NewsNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Stack.Screen
        name="NewsList"
        options={{ title: 'Newsfeed' }}
        component={NewsList}
      />
    </Stack.Navigator>
  );
};

export default NewsNav;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.main,
  },
  headerTitle: {
    color: colors.bg.main,
  },
});
