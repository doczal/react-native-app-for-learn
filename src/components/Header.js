import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tab = ({ text }) => {
  return (
    <View style={styles.tab}>
      <Text>{text}</Text>
    </View>
  );
};

const Header = ({ tabs = ['foo', 'bar'] }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {tabs.map(tab => (
          <Tab key={tab} text={tab} />
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'tomato',
    borderWidth: 2,
    borderColor: 'maroon',
  },
  headerContainer: {
    // padding: 10,
    backgroundColor: 'orchid',
    // width: '100%',
    flex: 0,
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'deeppink',
    // padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
  },
});
