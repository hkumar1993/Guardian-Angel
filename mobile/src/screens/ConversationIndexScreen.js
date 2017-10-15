import React, { Component } from 'react';
import { graphql, withApollo, compose } from 'react-apollo';
import styled from 'styled-components/native';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import ConversationIndex from '../components/ConversationIndex/ConversationIndex'

import GET_USER_CONVERSATIONS from '../graphql/queries/getUserConversations';
// import CONVERSATION_JOINED from '../graphql/subscriptions/conversationJoined';

const Root = styled.View`

`;

class ConversationIndexScreen extends Component {



  componentDidMount() {
    console.log('conversationidx =========', this.props);
    console.log('conversationidx =========', typeof this.props.user.info._id);
    this._getUserConversations(this.props.user.info._id)
  }

  _getUserConversations = async (id) => {
    try {
      const { data } = await this.props.client.query({
        query: GET_USER_CONVERSATIONS,
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
    console.log('PROPS ConversationIndexScreen:', this.props);
    const  { data, user } = this.props;
    if(data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }
    return (
      <Root>
        <ConversationIndex data={data} user={user}/>
      </Root>
    )
  }
}

export default withApollo(compose(
  connect( state => {
            return {
              data: state.apollo.data,
              user: state.user,
              _id: state.user.info._id
            }
          }, null),
  graphql(GET_USER_CONVERSATIONS)
)(withNavigation(ConversationIndexScreen)));
