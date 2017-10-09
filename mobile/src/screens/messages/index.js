import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>This is the text message index</Text>
      </View>
    );
  }
}
