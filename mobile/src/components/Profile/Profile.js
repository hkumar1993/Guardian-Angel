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

const Root = styled.View`
`;


class Profile extends Component {

  componentWillReceiveProps() {
    this._getUserNeeds(this.props._id);
    console.log('GOT PROPS',this.props);
    // this._getUserNeeds(this.props.user._id);
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
      <Root>
        <ProfileHeader user={this.props.user} />
        <NeedIndex data={data.getUserNeeds} />
      </Root>
    )
  }
}

export default withApollo(compose(
    connect(state => { return { data: state.apollo.data, index: state.nav.routes.index} }, null ),
    graphql(GET_USER_NEEDS_QUERY)
  )(withNavigation(Profile))
);
