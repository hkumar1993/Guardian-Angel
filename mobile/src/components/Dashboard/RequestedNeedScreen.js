import React, { Component } from 'react';
import styled from 'styled-components/native';
import TableView from './Table'
import Touchable from '@appandflow/touchable';
import { withNavigation } from 'react-navigation'
import Loading from '../Loading'
import { colors } from '../../utils/constants'
import NeedRow from './NeedRow'
import { FlatList, Text, View } from 'react-native';
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import GET_USER_NEEDS_QUERY from '../../graphql/queries/getUserNeeds';
import { GET_USER_REQUESTS } from '../../graphql/queries/getRequests'

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
  borderColor: ${colors.DARK_BLUE}
  borderTopLeftRadius: 5;
  borderTopRightRadius: 5;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  shadowColor: black;
  shadowOffset: 0px 2px;
  shadowRadius: 1;
  shadowOpacity: 0.3;
  zIndex: 10;
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
  width: 100%;
  borderBottomLeftRadius: 5;
  borderBottomRightRadius: 5;
  backgroundColor: white;
`;

class PostedNeedScreen extends Component {
  constructor(props){
    super(props)
    this.state = { loading: true}
  }

  _renderItem = (props) => <NeedRow _id={props.item.need._id} need={props.item.need}/>


  render() {
    // console.log("PROPS",this.props);
    const data = this.props.data
    const needs = data.getUserRequests
    if(data.loading){
      return (
        <Loading />
      )
    }
    // console.log("Req props", this.props);
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
          <FlatList
            contentContainerStyle={{
              alignSelf: 'stretch'
            }}
            data={this.props.data.getUserRequests}
            keyExtractor={item => item._id}
            renderItem={this._renderItem}
            />
        </Table>
      </Root>
    )
  }
}

export default withApollo(
  compose(
    connect(state => ({apollo: state.apollo.data, _id: state.user.info._id}), null),
    graphql(GET_USER_REQUESTS)
  )(withNavigation(PostedNeedScreen))
)
