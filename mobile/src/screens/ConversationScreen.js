import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, withApollo, compose } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import GET_MESSAGES_QUERY from '../graphql/queries/getConversationMessages';
import MESSAGE_ADDED_SUBSCRIPTION from '../graphql/subscriptions/messageAdded';

import { getUserInfo } from '../actions/user';
import Conversation from '../components/Conversation/Conversation';

const Root = styled.View`

`;

const T = styled.Text`
flex: 1;
justifyContent: center;
paddingTop: 5;
`;

class ConversationScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    console.log("PROPS ConversationScreen: ", this.props);
    this.props.data.subscribeToMore({
      document: MESSAGE_ADDED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        console.log("PREV stuff: ", prev);
        console.log("SUBSCRIPTIONDATA stuff: ", subscriptionData);
        if (!subscriptionData.data) {
          console.log("PREV stuff inside check: ", prev);
          return prev;
        }

        const newMessage = subscriptionData.data.messageAdded;

        // prevent double messages
        if (!prev.getConversationMessages.find(c => c._id === newMessage._id)) {
          return {
            ...prev,
            getConversationMessages: [{ ...newMessage }, ...prev.getConversationMessages]
          }
        }

        return prev;
      }
    })
  }

  componentWillReceiveProps() {
    console.log("PROPS Conversation Screen: ", this.props);
    this._getConversationMessages(this.props._id)
  }

  _getConversationMessages = async (id) => {
    try {
      const { data } = await this.props.client.query({
        query: GET_MESSAGES_QUERY,
        variables: {
          _id: id
        }
      })
      console.log(data);
      return data;
    } catch (e){
      throw e
    }
  }



  render() {
    console.log("PROPS: ConversationScreen", this.props);
    const messages = this.props.data.getConversationMessages

    if (this.props.data.loading) {
      <Root>
        <ActivityIndicator size="large"/>
      </Root>
    }

    return (
      <Conversation messages={messages} conversationId={this.props._id}/>
    )
  }
}

export default withApollo(
  compose(
    connect( (state, ownProps )=> {
      return {
        _id: ownProps.navigation.state.params._id
      }
    }),
    graphql(GET_MESSAGES_QUERY)
  )(withNavigation(ConversationScreen))
);
// export default withNavigation(ConversationScreen)
