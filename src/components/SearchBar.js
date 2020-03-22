import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from 'styles';

const SearchBar = ({
  val,
  placeholder = 'Search',
  handleSearch,
  onFocus,
  onBlur,
}) => {
  return (
    <View>
      <TextInput
        value={val}
        style={styles.searchBar}
        placeholder={placeholder}
        onChangeText={handleSearch}
        placeholderTextColor="white"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    backgroundColor: colors.bg.alt,
    color: 'white',
  },
});
