import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoteCard = () => {
  return (
    <View style={styles.card}>
      <Text>This is a note</Text>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  card: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },
});
