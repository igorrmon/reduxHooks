import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native'
import Component from './component';
import addEmailAction from './src/redux/actions/AddEmail'


export default function Intern() {

  const dispatch = useDispatch();
  const [emailState, setState] = useState('')

  function addEmail() {
    if (emailState.length > 0) {
      dispatch(addEmailAction(emailState))
    }
  }

  return (

    <View>
      <TextInput placeholder='Write your email' onChangeText={(text) => setState(text)} />
      <Button onPress={() => addEmail()} title='SAVE' />
      <Component />
    </View>

  );
}
