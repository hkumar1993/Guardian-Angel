import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
// import GET_MESSAGES_QUERY from '../graphql/queries/getMessages';

import Conversation from '../components/Conversation/Conversation';

const Root = styled.View`

`;

const T = styled.Text`
flex: 1;
justifyContent: center;
paddingTop: 5;
`;

class ConversationScreen extends Component {
  state = {};

  render() {
    return (
      <Root>
        <Conversation />
      </Root>
    )
  }
}

export default ConversationScreen;
