import React, { Component } from 'react';
import styled from 'styled-components/native';
import TableView from './Table'

const Root = styled.View`
  width: 100%;
  alignItems: center;
  paddingTop: 20;
`;

const T = styled.Text`

`;

class PostedNeedScreen extends Component {
  state = {};

  render() {
    return (
      <Root>
        <TableView />
      </Root>
    )
  }
}

export default PostedNeedScreen;
