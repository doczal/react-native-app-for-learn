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
  // showDots,
}) => {
  const [anim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(anim, { toValue: 1, duration: 1000 }).start();
  }, [anim]);
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
    // showDots,
  });

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
  const tabTextColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', colors.main],
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabHeaderContainer}>
        <View style={styles.tabHeader}>
          {state.routes.map(route => (
            <TouchableHighlight
              onPress={() => handlePress(route)}
              key={route.key}
            >
              <View style={styles.tabContainer}>
                <Animated.Text
                  style={{
                    ...styles.tabText,
                    color: tabTextColor,
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
      <View style={styles.screenContent}>
        {state.routes.map(route => descriptors[route.key].render())}
        {/* {descriptors[state.routes[state.index].key].render()} */}
      </View>
    </View>
  );
};

export default createNavigatorFactory(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexShrink: 0,
    minHeight: '100%',
  },
  tabHeaderContainer: {
    flex: 0,
    flexDirection: 'row',
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
