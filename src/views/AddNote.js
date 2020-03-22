import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { colors } from 'styles';

const AddNote = ({ navigation, handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const onPress = () => {
    handleAddNote(noteText);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        style={styles.textInput}
        multiline={true}
        onChangeText={e => setNoteText(e)}
      />
      <Button onPress={onPress} title="add" color={colors.main} />
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
