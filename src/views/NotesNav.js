import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from 'views/Notes';
import AddNote from 'views/AddNote';
import { colors } from '../styles';

import { todos as initialState } from 'mockData/todos';

const Stack = createStackNavigator();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'addNote':
      return [...state, action.note];
    default:
      throw new Error();
  }
};

const NotesNav = () => {
  const [notes, dispatch] = useReducer(notesReducer, initialState);
  const addNote = text => {
    dispatch({
      type: 'addNote',
      note: {
        id: notes.length + 1,
        text,
        completed: false,
      },
    });
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Notes"
      >
        {props => <Notes {...props} notes={notes} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.bg.main,
          },
          headerTintColor: colors.main,
        }}
        name="Add Note"
      >
        {props => <AddNote {...props} handleAddNote={addNote} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default NotesNav;

const styles = StyleSheet.create({});
