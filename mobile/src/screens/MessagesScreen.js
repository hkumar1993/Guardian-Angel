import React, { Component } from 'react';
import styled from 'styled-components/native';

import MessageIndex from '../components/MessageIndex/MessageIndex'

const Root = styled.View`

`;

// const T = styled.Text`
//
// `;

class MessagesScreen extends Component {
  state = {};

  render() {
    return (
      <Root>
        <MessageIndex />
      </Root>
    )
  }
}

export default MessagesScreen;
