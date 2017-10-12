import React from 'react'
import Touchable from '@appandflow/touchable';
import styled from 'styled-components/native';
import { fakeAvatar } from '../../utils/constants';
import { withNavigation } from 'react-navigation';

const Avatar = props => {
  const user = props.user
  const avatar = props.user.avatar
  const AVATAR_SIZE = props.size;
  const AVATAR_RADIUS = AVATAR_SIZE / 2;
  const navigate = props.navigation.navigate
  const touchable = props.touchable
  const AvatarContainer = styled(Touchable).attrs({
    feedback: 'opacity'
  })`
  `;

  const AvatarImage = styled.Image`
    height: ${ AVATAR_SIZE } ;
    width: ${ AVATAR_SIZE } ;
    borderWidth: 2px;
    borderColor: ${props => props.theme.LIGHT_BLUE};
    borderRadius: ${ AVATAR_RADIUS };
  `;

  return (
    <AvatarContainer onPress={() => {
        if(touchable){
          navigate('OtherProfile', {user: props.user})
        } else {
          null
        }
      }
    } >
      <AvatarImage source={{ uri: avatar || fakeAvatar }} />
    </AvatarContainer>
  )
}

export default withNavigation(Avatar)
