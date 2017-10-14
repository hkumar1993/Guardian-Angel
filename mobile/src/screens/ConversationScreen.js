import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, withApollo, compose } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native';

// import GET_MESSAGES_QUERY from '../graphql/queries/getMessages';
import GET_USER_CONVERSATIONS from '../graphql/queries/getUserConversations'
import CONVERSATION_JOINED from '../graphql/subscriptions/conversationJoined';
import ME_QUERY from '../graphql/queries/me';

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

  componentWillMount(){
    console.log(this.props);
    this.props.data.subscribeToMore({
      document: CONVERSATION_JOINED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newConversation = subscriptionData.data.conversationJoined;

        if (!prev.getConversations.find(c => c._id === newConversation._id)) {
          return {
            ...prev,
            getConversations: [{ ...newConversation }, ...prev.getConversations]
          }
        }

        return prev;
      }
    })
  }

  componentDidMount() {
    this._getUserInfo();
    this._getUserConversations(this.props._id)
  }

  _getUserInfo = async () => {
    const { data: { me } } = await this.props.client.query({ query: ME_QUERY })

    this.props.getUserInfo(me);
  }

  _getUserConversations = async (user_id) => {
    try {
      const { data } = await this.props.client.query({
        query: GET_USER_CONVERSATIONS,
        variables: {
          _id: user_id
        }
      })
      return data
    } catch (e) {
      throw e
    }
  }

  render() {
    console.log('conversation props: ', this.props);
    const { data } = this.props
    if (data.loading) {
      <Root>
        <ActivityIndicator size="large"/>
      </Root>
    }
    return (
      <Root>
        <Text>thing is working</Text>
      </Root>
    )
  }
}

const mapStateToProps = state => {
  return { data: state.apollo.data, user: state.user } ;
  // return { user: state.user }
}

export default withApollo(
  compose(
    graphql(GET_USER_CONVERSATIONS),
    connect(null, { getUserInfo })
  )(ConversationScreen)
);
