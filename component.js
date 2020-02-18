import React from 'react';
import { useSelector} from 'react-redux';
import { View, Text } from 'react-native'


export default function Component() {

  const email = useSelector(state => state.data);

  return (

    <View><Text>{email}</Text></View>

  );
}
