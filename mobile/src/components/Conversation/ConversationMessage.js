import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  minHeight: 180;
  padding: 7px;
  backgroundColor: ${ props => props.theme.LIGHT_GREY };
  width: 100%;
  shadowColor: ${ props => props.theme.LIGHT_BLUE };
  shadowOffset: 0px 5px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
  marginVertical: 5;
`;

const currentUserText = styled.Text`
  fontSize: 14;
  backgroundColor: blue;
  flexDirection: flex: start;
  width: 80%;
`;

const otherUserText = styled.Text`
  fontSize: 14;
  backgroundColor: green;
  flexDirection: flex-end;
  width: 80%;
`;

const currentUser = 'Brent'

const userText = (text) => {
  if( props.user === currentUser ) {
    return <currentUserText>{text}</currentUserText>
  }
  return <otherUserText>{text}</otherUserText>
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

function ConversationMessage() {
    return (
      <Root>
        <T>{ userText(text) }</T>
      </Root>
    );
};

export default ConversationMessage;
