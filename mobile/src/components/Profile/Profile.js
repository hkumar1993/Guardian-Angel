import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import ProfileHeader from './ProfileHeader'

const Root = styled.View`

`;


class Profile extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <Root>
        <ProfileHeader user={this.props.user} />
      </Root>
    )
  }
}

export default withNavigation(Profile)
