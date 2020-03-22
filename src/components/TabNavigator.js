import React, { useState, useEffect, useRef } from 'react';
import { usePrevious } from 'shared/utils';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from 'react-native';
import { colors, fonts } from 'styles';
import Dots from 'img/3dots.svg';

const TabNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  // showDots,
}) => {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
    // showDots,
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeOutAnim = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const transIn = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });
  const transOut = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
  });

  const selectedRouteKey = state.routes[state.index].key;
  const prevNavIndex = usePrevious(state.index);

  useEffect(() => {
    console.log('animate!');
    fadeAnim.setValue(0);
    Animated.spring(fadeAnim, { toValue: 1, duration: 200 }).start();
  }, [fadeAnim, selectedRouteKey]);

  const handlePress = route => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!event.defaultPrevented) {
      navigation.dispatch(TabActions.jumpTo(route.name));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabHeaderContainer}>
        <View style={styles.tabHeader}>
          {state.routes.map(route => (
            <TouchableHighlight
              underlayColor={null}
              onPress={() => handlePress(route)}
              key={route.key}
            >
              <View style={styles.tabContainer}>
                <Animated.Text
                  style={{
                    ...styles.tabText,
                    color:
                      route.key === selectedRouteKey ? colors.main : 'white',
                  }}
                >
                  {route.name}
                </Animated.Text>
                {/* <Animated.View
                  style={{ ...styles.tabUnderline, opacity: anim }}
                /> */}
              </View>
            </TouchableHighlight>
          ))}
          <TouchableHighlight style={styles.dots}>
            <Dots width="50%" height="50%" />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.mainScreen}>
        {state.routes.map((route, idx, prevNavIndex) => (
          <Animated.View
            key={route.key}
            style={getScreenStyle(
              route.key,
              selectedRouteKey,
              idx,
              routesArr,
              transIn,
              transOut,
            )}
          >
            {descriptors[route.key].render()}
          </Animated.View>
        ))}
        {/* {descriptors[state.routes[state.index].key].render()} */}
      </View>
    </View>
  );
};

export default createNavigatorFactory(TabNavigator);

const getScreenStyle = (
  currRouteKey,
  selectedRouteKey,
  currIndex,
  prevIndex,
) => {
  if (currRouteKey === selectedRouteKey) {
    if (currIndex > prevIndex) {
      return {
        ...styles.screenContent,
      };
    }
  }
  return {
    ...styles.screenContent,
    // opacity: fadeOut,
    // top: fadeOut,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexShrink: 0,
    minHeight: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'aquamarine',
  },
  tabHeaderContainer: {
    flex: 0,
    flexDirection: 'row',
    zIndex: 5,
  },
  tabHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.main,
    // paddingVertical: 15,
  },
  tabContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'lightblue',
  },
  tabText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
    fontSize: 20,
    // paddingVertical: 40,
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
  mainScreen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    // overflow: 'hidden',
    // flexShrink: 1,
  },
  screenContent: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    opacity: 1,
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
