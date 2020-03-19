import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Text>Hello World</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mistyrose',
  },
});
