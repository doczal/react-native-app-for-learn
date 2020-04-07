import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeed from 'views/NewsFeed';
import NewsFeedFlat from 'views/NewsFeedFlat';
import ArticleView from 'views/ArticleView';
import FlatListExample from 'views/FlatListExample2';
import { colors, fonts } from 'styles';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const NewsNav = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Stack.Screen
        name="NewsFeed"
        options={{ title: 'News Feedz' }}
        // component={FlatListExample}
        component={NewsFeedFlat}
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
