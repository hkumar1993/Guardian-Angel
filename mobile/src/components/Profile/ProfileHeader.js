import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors, angel, shield } from '../../utils/constants';
import { FontAwesome, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';

const Root = styled.View`
  alignItems: center;
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
  alignItems: flex-start;
  paddingTop: 10;
  marginLeft: 20;
`;

const UserName = styled.Text`
  fontSize: 30;
  color: ${colors.DARK_GREY};
  fontWeight: 500;

`;

const UserStats = styled.View`
  flexDirection: row;
  alignItems: center;
  marginBottom: 10;
`;

const Stat = styled.View`
  flexDirection: row;
  marginRight: 20px;
  alignItems: center;
`;

const StatImage = styled.Image`
  height: 20;
  width: 20;
  marginRight: 5;
`;

const StatText = styled.Text`
  color: ${colors.LIGHT_BLUE}
`;

const MessageButton = styled(Touchable).attrs({
  feedback: 'opacity',
})`
  paddingHorizontal: 30;
  paddingVertical: 10;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${colors.LIGHT_BLUE}
  borderRadius: 8;
`;

const ButtonText = styled.Text`
  fontSize: 20;
  fontWeight: 500;
  color: white;
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
          <UserStats>
            <Stat>
              <StatImage source={{uri:shield}}/>
              <StatText>12</StatText>
            </Stat>
            <Stat>
              <StatImage source={{uri:angel}}/>
              <StatText>5</StatText>
            </Stat>
          </UserStats>
          <MessageButton>
            <ButtonText>
              Message
            </ButtonText>
          </MessageButton>
        </UserDetails>
      </Root>
    )
  }
}

export default withNavigation(ProfileHeader)
