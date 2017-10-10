import React from 'react';
import styled from 'styled-components/native';

import Message from '../Message/Message';
import MessageIndexLeft from './MessageIndexLeft'
import MessageIndexContent from './MessageIndexContent'

const Root = styled.View`
  minHeight: 100;
  padding: 7px;
  backgroundColor: ${ props => props.theme.LIGHT_GREY };
  width: 100%;
  shadowColor: ${ props => props.theme.LIGHT_BLUE };
  shadowOffset: 0px 5px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
  marginVertical: 5;
`;

const MessageContentContainer = styled.View`
  flex: 1;
  flexDirection: row;
`;

const username = 'itsClay';
const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

function MessageIndex() {
    return (
      <Root>
        <MessageContentContainer>
          <MessageIndexLeft />
          <MessageIndexContent />
        </MessageContentContainer>
      </Root>
    );
};

export default MessageIndex;
