import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import ProfileHeader from './ProfileHeader'
import NeedIndex from '../NeedIndex/NeedIndex'
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList } from 'react-native';

import GET_USER_NEEDS_QUERY from '../../graphql/queries/getUserNeeds';
import NEED_ADDED_SUBSCRIPTION from '../../graphql/subscriptions/needAdded';

const Root = styled.View`
`;


class Profile extends Component {

  componentWillReceiveProps() {
    this._getUserNeeds(this.props._id);
    console.log('GOT PROPS',this.props);
    // this._getUserNeeds(this.props.user._id);
  }

  componentWillMount(){
    this.props.data.subscribeToMore({
      document: NEED_ADDED_SUBSCRIPTION,
      updateQuery: ( prev, { subscriptionData }) => {
        console.log("prev===", prev);
        console.log("subscriptionData===", subscriptionData);
        console.log("subscriptionData data===", subscriptionData.data);
        if(!subscriptionData.data) {
          console.log("prev inside", prev);
          return prev;
        }

        const newNeed = subscriptionData.data.needAdded;
        console.log("newNeed====", newNeed);

        if(!prev.getUserNeeds.find(need => need._id === newNeed._id)) {

          return {
            getUserNeeds: [{ ...newNeed }, ...prev.getUserNeeds ]
          }
        }

        return prev;
      }
    });
  }

  _getUserNeeds = async (id) => {
    // const { data: { this.props.user._id } } =
    //   await this.props.client.query({ query: GET_USER_NEEDS_QUERY });

    try {
      const { data } = await this.props.client.query({
        query: GET_USER_NEEDS_QUERY,
        variables: {
          _id: id
        }
      })
      return data
    } catch (e) {
      throw e
    }
  }

  constructor(props){
    super(props)
    this.state ={ userNeeds: null }
  }

  render() {
    const { data } = this.props;
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const isCurrentUser = user.username === currentUser.username
    console.log(this.props);
    window.userNeeds = data.userNeeds
    console.log(data);
    if(data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }
    return (
      <Root style={ this.props.index === 0 ? { height: '85%' } : { height: '100%' } }>
        <ProfileHeader user={this.props.user} />
        <NeedIndex data={data.getUserNeeds} />
      </Root>
    )
  }
}

export default withApollo(compose(
    connect(state => { return { data: state.apollo.data, index: state.nav.routes.index, currentUser: state.user.info} }, null ),
    graphql(GET_USER_NEEDS_QUERY)
  )(withNavigation(Profile))
);
