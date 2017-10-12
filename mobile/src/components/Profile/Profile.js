import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import ProfileHeader from './ProfileHeader'

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import GET_USER_NEEDS_QUERY from '../../graphql/queries/getUserNeeds';

const Root = styled.View`
`;


class Profile extends Component {

  componentDidMount() {
    this._getUserNeeds(this.props._id);
    // this._getUserNeeds(this.props.user._id);
  }

  _getUserNeeds = async (id) => {
    // const { data: { this.props.user._id } } =
    //   await this.props.client.query({ query: GET_USER_NEEDS_QUERY });

    try {
      const { data } = await this.props.client.query({
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
  }

  render() {
    console.log("PROPS!!!",this.props);
    return (
      <Root>
        <ProfileHeader user={this.props.user} />
      </Root>
    )
  }
}

export default withApollo(compose(
    connect(null, null ),
    graphql(GET_USER_NEEDS_QUERY)
  ) (withNavigation(Profile))
);
