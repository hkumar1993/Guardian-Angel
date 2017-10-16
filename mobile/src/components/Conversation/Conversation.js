import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { withNavigation } from 'react-navigation';
import { graphql, withApollo, compose } from 'react-apollo';
import { connect } from 'react-redux';

import CREATE_MESSAGE_MUTATION from '../../graphql/mutations/createMessage';
// import GET_CONVERSATION_MESSAGES_QUERY from '../../graphql/queries/getConversationMessages';

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
      user: this.props.user,
      conversationId: this.props.conversationId
    }
    this.giftUser = this.giftUser.bind(this)
  }

  componentWillReceiveProps(ownProps) {
    console.log("Hello?", ownProps);
    console.log("PROPS=======", this.props);
    const { messages, user, conversationId } = ownProps
    this.setState({
      messages,
      user,
      conversationId
    })
  }

  async onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    const { conversationId } = this.state;
    const userId = messages[0].user._id;
    const user = messages[0].user;
    const newText = messages[0].text;
    const createdAt = messages[0].createdAt;
    const _id = messages[0]._id;
    console.log("new message is========", messages);
    console.log("userid========", userId);
    console.log("newtext========", newText);
    console.log("createdAt========", createdAt);

    await this.props.mutate({
      variables: {
        conversation: conversationId,
        text: newText,
        user: userId
      },

      optimisticResponse: {
        __typename: 'Mutation',
        createMessage: {
          __typename: 'Message',
          text: newText,
          _id: _id,
          createdAt: createdAt,
          conversation: {
            __typename: 'Conversation',
            _id: conversationId
          },
          user: {
            __typename: 'User',
            _id: userId,
            username: this.props.user.username,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            avatar: this.props.user.avatar,
            email: this.props.user.email,
          },

        }
      },


    })
  }

  giftUser(){
    if (!this.props.user) {return (<View></View>)}
    return {
      _id: this.props.user._id,
      name: this.props.user.firstName + ' ' + this.props.user.lastName,
      avatar: this.props.user.avatar
    };
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
    }, null),
    graphql(CREATE_MESSAGE_MUTATION)
  )(withNavigation(Conversation))
);
