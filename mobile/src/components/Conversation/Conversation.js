import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { withNavigation } from 'react-navigation';
import { graphql, withApollo, compose } from 'react-apollo';
import { connect } from 'react-redux';

import {
  View,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';

import ConversationMessage from './ConversationMessage';


class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      user: this.props.user
    }
    this.giftUser = this.giftUser.bind(this)
  }

  componentWillReceiveProps(ownProps) {
    console.log("Hello?", ownProps);
    console.log("PROPS=======", this.props);
    const { messages, user } = ownProps
    this.setState({
      messages,
      user
    })
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

  giftUser(){
    if (!this.props.user) {return (<View></View>)}
    return {
      _id: this.props.user._id,
      name: this.props.user.firstName + ' ' + this.props.user.lastName,
      avatar: this.props.user.avatar
    };
  }

  _setupMessageObjects() {

  }


  render() {
    console.log("PROPS Conversation: ", this.props);
    console.log("STATE Conversation: ", this.state);
    return (
      <View style={styles.container}>
        <View style={styles.giftedChat}>
          <GiftedChat
            messages={this.state.messages}
            onSend={ (messages) => {
              // this needs to go to back end later
              this.onSend(messages)
            }}
            user={this.giftUser()}
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

export default withApollo(
  compose(
    connect(state => {
      return {
        user: state.user.info
      }
    }, null)
  )(withNavigation(Conversation))
);
