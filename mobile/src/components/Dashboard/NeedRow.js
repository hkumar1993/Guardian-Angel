import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { withNavigation } from 'react-navigation'
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { GET_NEED_REQUESTS } from '../../graphql/queries/getRequests'
import { NEED_REQUEST_ADDED } from '../../graphql/subscriptions/needRequestSubscriptions'
import { colors } from '../../utils/constants'
import { FontAwesome } from '@expo/vector-icons';

const Root = styled.View`
  backgroundColor: white;
  flexDirection: row;
  alignItems: center;
  minHeight: 10%;
  width: 100%;
`;

const Cell = styled.View`
  backgroundColor: white;
  height: 100%;
  paddingVertical: 10;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

const CellText = styled.Text`
  textAlign: center;
  color: ${colors.DARK_GREY};
`;

class NeedRow extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.client.query
    this._getNeedRequests(this.props._id)
  }

  _getNeedRequests = async (id) => {
    try {
      const { data } = await this.props.client.query({
        query: GET_NEED_REQUESTS,
        variables: {
          _id: id
        }
      })
      return data
    } catch (e) {
      throw e
    }
  }

  render(){
    const need = this.props.need
    const data = this.props.data

    if(data.loading){
      return (
        <CellText>Fetching Data...</CellText>
      )
    }
    return (
      <Root>
        <Cell style={{flex: 2, paddingLeft: 30, justifyContent: 'flex-end'}}>
          <CellText style={{textAlign: 'left'}}>{need.title}</CellText>
        </Cell>
        <Cell style={{flex: 1}}>
          <CellText>{data.getNeedRequests.length}</CellText>
        </Cell>
        <Cell style={{flex: 1}}>
          { need.completed ? (
            <FontAwesome size={25} color={colors.APPROVED_GREEN} name="check-circle" />
            ) : (
            <FontAwesome size={25} color={colors.DENIED_RED} name="times-circle" />
            )
          }
        </Cell>
      </Root>
    )
  }

}

export default withApollo(
  compose(
    connect(state => ({apollo: state.apollo.data}), null),
    graphql(GET_NEED_REQUESTS)
  )(withNavigation(NeedRow))
)
