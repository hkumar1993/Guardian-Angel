import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  minHeight: 100%;
  padding: 7px;
  width: 100%;
`;

const CurrentUserText = styled.Text`
  fontSize: 14;
  backgroundColor: blue;
  alignSelf: flex-start;
  width: 80%;
  borderRadius: 5;
`;

const OtherUserText = styled.Text`
  fontSize: 14;
  backgroundColor: green;
  alignSelf: flex-end;
  width: 80%;
  borderRadius: 5;
`;

// hook up to back end later and put in our conversationMessage
const currentUser = 'Brent';
const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

function ConversationMessage() {
    return (
      <Root>
        <CurrentUserText>{text}</CurrentUserText>
        <OtherUserText>{text}</OtherUserText>
      </Root>
    );
};

export default ConversationMessage;
