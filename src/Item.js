import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{`${title}`}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e8eaf6',
    padding: 10,
    marginHorizontal: 6,
    marginBottom: 12,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  itemText: {
    color: '#3d3d3d',
    textTransform: 'uppercase',
  },
});
