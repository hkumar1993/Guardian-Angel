import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  marginTop: 5;
  marginRight: 5;
  flex: 0.3;
`;

const T = styled.Text`
  fontSize: 14px;
  fontWeight: 700;
  color: ${props => props.theme.LIGHT_BLUE}
`;

function ConversationIndexHeader({ name }) {
  return (
    <Root>
      <T>{name}</T>
    </Root>
  )
}

export default ConversationIndexHeader;
