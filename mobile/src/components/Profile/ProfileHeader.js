import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../../utils/constants';

const Root = styled.View`
  flexDirection: row;
  padding: 10px;
  backgroundColor: white;
  shadowColor: black;
  shadowOffset: 0px 5px;
  shadowRadius: 2;
  shadowOpacity: 0.5;
`;

const UserDetails = styled.View`
  flexDirection: column;
  marginLeft: 20;
`;

const UserName = styled.Text`
  fontSize: 30;
  color: ${colors.DARK_GREY};
  fontWeight: 500;

`;

class ProfileHeader extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const user = this.props.user
    return (
      <Root>
        <Avatar user={user} size={100} touchable={false} />
        <UserDetails>
          <UserName>{user.firstName + ' ' + user.lastName}</UserName>
        </UserDetails>
      </Root>
    )
  }
}

export default withNavigation(ProfileHeader)
