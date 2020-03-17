import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

const FloatingButton = ({ bottom = 10, left = 10 }) => {
  return (
    <View style={styles.btn}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('yellow', false)}
      >
        <View style={styles.innerBtn}>
          <Text style={styles.btnText}>Hi</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  btnTouch: {
    overflow: 'hidden',
  },
  btn: {
    backgroundColor: 'tomato',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 20,
    right: 10,
    bottom: 10,
    elevation: 6,
    // width: 200,
    flex: 1,
    flexShrink: 0,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  btnText: {
    textTransform: 'uppercase',
  },
  innerBtn: {
    // padding: 10,
    backgroundColor: 'tomato',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
