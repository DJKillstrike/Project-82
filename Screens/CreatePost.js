import React from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#101010',
        }}>
        <Text style={{color: 'white'}}>CreatePost Screen </Text>
      </View>
    );
  }
}
