import React, { Component } from 'react';
import { graphql, withApollo, compose } from 'react-apollo';
import styled from 'styled-components/native';
import { ActivityIndicator, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import ConversationIndex from '../components/ConversationIndex/ConversationIndex'

// import GET_MESSAGES_QUERY from '../graphql/queries/getMessages';
import GET_USER_CONVERSATIONS from '../graphql/queries/getUserConversations';
// import CONVERSATION_JOINED from '../graphql/subscriptions/conversationJoined';
// import ME_QUERY from '../graphql/queries/me';



const Root = styled.View`

`;

// const T = styled.Text`
//
// `;

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
    console.log('===HELLO?!===', this.props.data);
    return (
      <Root>
        <ConversationIndex />
      </Root>
    )
  }
}

export default withApollo(compose(
  connect( state => { return {data: state.apollo.data, user: state.user, _id: state.user.info._id } }, null),
  graphql(GET_USER_CONVERSATIONS)
)(withNavigation(ConversationIndexScreen)));
