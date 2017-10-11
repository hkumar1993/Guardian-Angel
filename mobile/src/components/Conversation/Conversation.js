import React from 'react';
import styled from 'styled-components/native';

import ConversationMessage from './ConversationMessage';


const Root = styled.View`
  backgroundColor: yellow;
`;

const T = styled.Text`
  fontSize: 14;
`;

const text = "Conversation";

function Conversation() {
    return (
      <Root>
        <T>{text}</T>
      </Root>
    );
};

export default Conversation;
