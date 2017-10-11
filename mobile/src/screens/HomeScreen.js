import React from 'react';
import styled from 'styled-components/native';
import { graphql } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';

import NeedCard from '../components/NeedCard/NeedCard';

import GET_NEEDS_QUERY from '../graphql/queries/getNeeds';

const Root = styled.View`
  flex: 1;
  justifyContent: center;
  paddingTop: 5;
 `;


class HomeScreen extends React.Component {
  _renderItem = (props) => <NeedCard {...props}/>

  render() {
    const { data } = this.props;
    if(data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }

    return (
      <Root>
        <FlatList
          contentContainerStyle={{
            alignSelf: 'stretch'
          }}
          data={data.getNeeds}
          keyExtractor={item => item._id}
          renderItem={this._renderItem}
          />
      </Root>
    )
  }
}

export default graphql(GET_NEEDS_QUERY)(HomeScreen);
