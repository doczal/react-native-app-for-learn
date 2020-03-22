import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Button,
  Animated,
} from 'react-native';
import SearchBar from 'components/SearchBar';
import AddBtn from 'components/AddBtn';
import { colors } from '../styles';

const Notes = ({ navigation }) => {
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
});
