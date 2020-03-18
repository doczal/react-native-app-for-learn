import React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from 'styles';
import { color } from 'react-native-reanimated';

const TabNavigator = ({ initialRouteName, children, screenOptions }) => {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });
  return (
    <View style={styles.container}>
      <View style={styles.tabHeader}>
        {state.routes.map(route => (
          <View key={route.key} style={styles.tabContainer}>
            <Text>{route.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.screenContent}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
    </View>
  );
};

export default createNavigatorFactory(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabHeader: {
    flex: 1,
    // flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.main,
  },
  tabContainer: {
    height: '100%',
    borderBottomWidth: 4,
    borderBottomColor: colors.alt2,
    // flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContent: {
    flex: 11,
    // flexShrink: 1,
  },
});
