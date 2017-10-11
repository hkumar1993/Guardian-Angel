import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 1
  backgroundColor: purple;
`;

const T = styled.Text`
  fontSize: 12px;
`;

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

function MessageIndexContent() {
  return (
    <Root>
      <T>{text}</T>
    </Root>
  )
}

export default MessageIndexContent;
