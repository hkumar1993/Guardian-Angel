import React, { Component } from 'react';
import styled from 'styled-components/native';

import NeedShow from '../components/NeedShow/NeedShow'

const Root = styled.View`

`;

const TestText = styled.Text``;


class NeedScreen extends Component {
  state = {};

  render() {
    return (
      <Root>
        <TestText>Hello</TestText>
      </Root>
    )
  }
}

export default NeedScreen;
