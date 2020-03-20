import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Button,
} from 'react-native';
import SearchBar from 'components/SearchBar';

const Notes = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar />
        <Text>Notes!</Text>
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="Go to 'Profile'"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    padding: 20,
  },
});
