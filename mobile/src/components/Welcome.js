import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  backgroundColor: ${props => props.theme.LIGHT_GREY};
  width: 90%;
  alignSelf: center;
`;

const Text = styled.Text`
  color: ${props => props.theme.TAG_BLUE};
  fontSize: 18;
  textAlign: center;
`;

export default function Welcome() {
  return (
    <Root>
      <Text>Welcome, if you see this that mean everything work!!!</Text>
    </Root>
  )
}
