import React, { Component } from 'react';
import styled from 'styled-components/native';
import TableView from './Table'
import Touchable from '@appandflow/touchable';
import { withNavigation } from 'react-navigation'
import Loading from '../Loading'
import { colors } from '../../utils/constants'

import { FlatList } from 'react-native';
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

const Table = styled.View`
  width: 95%;
  height: 93%;
  borderRadius: 5;
`;

const TableHeader = styled.View`
  height: 10%;
  backgroundColor: ${colors.LIGHT_BLUE}
  borderTopLeftRadius: 5;
  borderTopRightRadius: 5;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  shadowColor: black;
  shadowOffset: 0px 2px;
  shadowRadius: 1;
  shadowOpacity: 0.3;
  zIndex: 111;
`;

const TableHeaderCell = styled.View`
  height: 100%;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  paddingHorizontal: 10;
`;

const TableHeaderText = styled.Text`
  textAlign: center;
  color: white;
  fontWeight: 700;
  fontSize: 15;
`;

const TableBody = styled.View`
  height: 90%;
  width: 100%;
  borderBottomLeftRadius: 5;
  borderBottomRightRadius: 5;
  backgroundColor: white;
`;

class PostedNeedScreen extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Root>
        <Table>
          <TableHeader>
            <TableHeaderCell style={{flex: 2}}>
              <TableHeaderText>
                Need Title
              </TableHeaderText>
            </TableHeaderCell>
            <TableHeaderCell style={{flex: 1}}>
              <TableHeaderText>
                Total Requests
              </TableHeaderText>
            </TableHeaderCell>
            <TableHeaderCell style={{flex: 1}}>
              <TableHeaderText>
                Status
              </TableHeaderText>
            </TableHeaderCell>
          </TableHeader>
          <TableBody>

          </TableBody>
        </Table>
      </Root>
    )
  }
}

export default withApollo(
  compose(
    connect(state => ({apollo: state.apollo.data, _id: state.user.info._id}), null),
    graphql(GET_USER_NEEDS_QUERY)
  )(withNavigation(PostedNeedScreen))
)
