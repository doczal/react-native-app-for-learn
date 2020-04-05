import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeed from 'views/NewsFeed';
import ArticleView from 'views/ArticleView';
import { colors, fonts } from 'styles';

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
        name="NewsFeed"
        options={{ title: 'News Feed' }}
        component={NewsFeed}
      />
      <Stack.Screen
        name="ArticleView"
        options={{ title: 'Article' }}
        component={ArticleView}
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
    fontFamily: fonts.bold,
  },
});
