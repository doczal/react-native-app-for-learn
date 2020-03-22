import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from 'views/Notes';
import AddNote from 'views/AddNote';
import { colors } from '../styles';

const Stack = createStackNavigator();

const NotesNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Notes"
        component={Notes}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.bg.main,
          },
          headerTintColor: colors.main,
        }}
        name="Add Note"
        component={AddNote}
      />
    </Stack.Navigator>
  );
};

export default NotesNav;

const styles = StyleSheet.create({});
