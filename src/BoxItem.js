import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxItem = ({ text }) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default BoxItem;

const styles = StyleSheet.create({
  boxContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  box: {
    padding: 20,
    backgroundColor: '#dedede',
    marginRight: 0,
  },
  text: {
    color: 'red',
  },
});
