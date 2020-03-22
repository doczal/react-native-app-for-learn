import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles';

const NoteCard = ({ text }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  card: {
    borderColor: colors.line,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});
