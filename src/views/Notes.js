import React, { useState, useReducer } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Button,
  Animated,
  FlatList,
} from 'react-native';
import SearchBar from 'components/SearchBar';
import AddBtn from 'components/AddBtn';
import NoteCard from 'components/NoteCard';
import { colors } from '../styles';

const Notes = ({ navigation, notes }) => {
  const [isEditing, setEditing] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = e => {
    setSearchVal(e);
  };

  const onFocus = () => {
    setEditing(true);
  };
  const onBlur = () => {
    setEditing(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar
          val={searchVal}
          handleSearch={handleSearch}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <FlatList
          style={styles.notesContainer}
          data={notes}
          renderItem={({ item }) => <NoteCard text={item.text} />}
          keyExtractor={item => item.id.toString()}
        />
        <AddBtn
          onPress={() => navigation.navigate('Add Note')}
          hide={isEditing}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.main,
    padding: 20,
  },
  notesContainer: {
    paddingTop: 20,
  },
});
