import React, { useState, useEffect } from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from 'react-native';
import { colors, fonts } from 'styles';
import Dots from 'img/3dots.svg';
import Reanimated from 'react-native-reanimated';

const TabNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  showDots,
}) => {
  const [anim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(anim, { toValue: 0.8, duration: 1000 }).start();
  }, []);
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
    showDots,
  });

  const handlePress = () => {
    console.log('hi word');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabHeader}>
        {state.routes.map(route => (
          <TouchableHighlight onPress={handlePress} key={route.key}>
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>{route.name}</Text>
              <Animated.View
                style={{ ...styles.tabUnderline, opacity: anim }}
              />
            </View>
          </TouchableHighlight>
        ))}
        <TouchableHighlight style={styles.dots}>
          <Dots width="50%" height="50%" />
        </TouchableHighlight>
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
    flexShrink: 0,
    height: '100%',
  },
  tabHeader: {
    flex: 1,
    flexShrink: 0,
    // flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.main,
  },
  tabContainer: {
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightblue',
  },
  tabText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
    fontSize: 20,
  },
  tabUnderline: {
    position: 'absolute',
    // width: '100%',
    height: 4,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.main,
  },
  screenContent: {
    flex: 11,
    backgroundColor: colors.bg.main,
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
