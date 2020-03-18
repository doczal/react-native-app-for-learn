import React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from 'styles';
import Dots from 'img/3dots.svg';

const TabNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  showDots,
}) => {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
    showDots,
  });
  return (
    <View style={styles.container}>
      <View style={styles.tabHeader}>
        {state.routes.map(route => (
          <TouchableOpacity key={route.key}>
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>{route.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.dots}>
          <Dots width="50%" height="50%" />
        </TouchableOpacity>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
    fontSize: 20,
  },
  screenContent: {
    flex: 11,
    // flexShrink: 1,
  },
  dots: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
