import React from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors, fonts } from '../styles';

const CustomTabBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableHighlight
            onPress={onPress}
            style={styles.tab}
            key={route.key}
          >
            <Text
              style={{
                ...styles.tabText,
                color: isFocused ? colors.main : 'white',
              }}
            >
              {label}
            </Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.bg.main,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    padding: 15,
    paddingHorizontal: 20,
  },
  tabText: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.bold,
  },
});
