import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { colors } from 'styles';

const AddNote = () => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        style={styles.textInput}
        multiline={true}
        // numberOfLines={5}
      />
      <Button title="add" color={colors.main} />
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
    backgroundColor: colors.bg.main,
  },
  textInput: {
    padding: 10,
    color: 'white',
    textAlignVertical: 'top',
    flex: 1,
    marginBottom: 10,
  },
});
