import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Logo from 'img/dahead.svg';

const Profile = () => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('asdf')}>
      <View style={styles.container}>
        <Logo width={40} height={40} />
        <Text>Profilez</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
});
