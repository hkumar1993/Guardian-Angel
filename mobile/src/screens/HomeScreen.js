import React from 'react';
import styled from 'styled-components/native';

import NeedCard from '../components/NeedCard/NeedCard';

const Root = styled.View`
  flex: 1;
  justifyContent: center;
  paddingTop: 5;
  backgroundColor: purple;
 `;

const List = styled.ScrollView`

`;


export default class HomeScreen extends React.Component {
  state = {  }
  render() {
    return (
      <Root>
        <List>
          <NeedCard />
          <NeedCard />
          <NeedCard />
          <NeedCard />
          <NeedCard />
          <NeedCard />
          <NeedCard />
          <NeedCard />
        </List>
      </Root>
    )
  }
}
