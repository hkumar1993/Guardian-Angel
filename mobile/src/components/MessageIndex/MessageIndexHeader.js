import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 1
  backgroundColor: pink;
`;

const T = styled.Text`
  fontSize: 14px;
  fontWeight: 500;
`;

const user = 'User123'

function MessageIndexHeader() {
  return (
    <Root>
      <T>{user}</T>
    </Root>
  )
}

export default MessageIndexHeader;
