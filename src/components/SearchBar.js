import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from 'styles';

const SearchBar = ({ val, placeholder = 'Search', handleSearch }) => {
  return (
    <View>
      <TextInput
        value={val}
        style={styles.searchBar}
        placeholder={placeholder}
        onChangeText={handleSearch}
        placeholderTextColor="white"
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
