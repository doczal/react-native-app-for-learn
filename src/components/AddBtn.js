import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { colors } from '../styles';
import AddIcon from 'img/plus.svg';

const AddBtn = ({ hide = false }) => {
  if (hide) {
    return null;
  }
  return (
    <TouchableHighlight style={styles.addBtn}>
      <AddIcon width="75%" height="75%" />
    </TouchableHighlight>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  addBtn: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '4%',
    bottom: '4%',
    elevation: 5,
  },
});
