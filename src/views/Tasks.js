import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Button,
} from 'react-native';
import SearchBar from 'components/SearchBar';

const Tasks = ({ navigation }) => {
  const [count, setCount] = useState(0);
  useEffect(() => () => console.log('unmounting task!'));
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar />
        <Text>You have {count} Tasks!</Text>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => setCount(count + 1)} title="Press Me" />
        </View>
        <Button
          onPress={() => navigation.navigate('Notes')}
          title="Go to Notes"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightblue',
    padding: 20,
  },
});
