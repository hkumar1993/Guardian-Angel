import React, { Component } from 'react';
import styled from 'styled-components/native';

import NeedShow from '../components/NeedShow/NeedShow'

const Root = styled.View`

`;

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
