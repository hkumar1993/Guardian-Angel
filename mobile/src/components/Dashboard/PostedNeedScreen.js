import React, { Component } from 'react';
import styled from 'styled-components/native';
import TableView from './Table'
import Touchable from '@appandflow/touchable';
import { withNavigation } from 'react-navigation'
import Loading from '../Loading'

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import GET_USER_NEEDS_QUERY from '../../graphql/queries/getUserNeeds';
import { GET_NEED_REQUESTS, GET_USER_REQUESTS } from '../../graphql/queries/getRequests'
import { NEED_REQUEST_ADDED, NEED_REQUEST_DELETED } from '../../graphql/subscriptions/needRequestSubscriptions'


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
