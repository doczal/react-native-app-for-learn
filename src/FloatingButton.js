import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const FloatingButton = ({ bottom = 0, right = 0 }) => {
  return (
    <TouchableOpacity style={[styles.btnTouch, { bottom, right }]}>
      <Text style={styles.btnText}>Add</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  btnTouch: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: '#757de8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  btnText: {
    textTransform: 'uppercase',
  },
});
