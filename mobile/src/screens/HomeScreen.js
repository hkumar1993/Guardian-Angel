import React from 'react';
import styled from 'styled-components/native';

// use compose to call query or mutation
// use withApollo to use access to the Apollo client --> this.props.client
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { ActivityIndicator, FlatList } from 'react-native';

import NeedCard from '../components/NeedCard/NeedCard';

import { getUserInfo } from '../actions/user';

// graphql queries
import GET_NEEDS_QUERY from '../graphql/queries/getNeeds';
import ME_QUERY from '../graphql/queries/me';

const Root = styled.View`
  flex: 1;
  justifyContent: center;
  paddingTop: 5;
 `;


class HomeScreen extends React.Component {

  componentDidMount() {
    this._getUserInfo();
  }

  _getUserInfo = async () => {
    const { data: { me } } = await this.props.client.query({ query: ME_QUERY });
    
    this.props.getUserInfo(me);
  }

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

// use compose to call query or mutation
// use withApollo to use access to the Apollo client --> this.props.client
export default withApollo(
  compose(
    connect(null, { getUserInfo }),
    graphql(GET_NEEDS_QUERY)
  )(HomeScreen)
);
