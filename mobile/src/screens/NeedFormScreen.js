import React, { Component } from 'react';
import styled from 'styled-components/native';

import NeedForm from '../components/NeedForm'

const Root = styled.View`

`;

const TestText = styled.Text``;


class NeedScreen extends Component {
  state = {};

  render() {
    return (
      <Root>
        <NeedShow />
      </Root>
    )
  }
}

export default NeedScreen;
