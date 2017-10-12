import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  View,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';
import { GiftedChat } from 'react-native-gifted-chat';
import io from 'socket.io-client';

import ConversationMessage from './ConversationMessage';
const API_URL = 'http://localhost:3000';


class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    console.log('hi');



    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  componentDidMount() {
    // load messages
  }

  componentWillUnmount() {
    // close IO connection
  }

  onSend(messages = []) {
  this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, messages),
  }));
}

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.giftedChat}>
          <GiftedChat
            messages={this.state.messages}
            onSend={ (messages) => {
              // this needs to go to back end later
              this.onSend(messages)
            }}
            user={{
              _id: 1,
            }}
            />
        </View>

      </View>

    );
  }

};

const styles = StyleSheet.create({
  giftedChat: {
    top: Dimensions.get('window').height*.1,
    height: Dimensions.get('window').height*.8,
  },
  container: {
    flex: 1
  }
})

export default Conversation;
