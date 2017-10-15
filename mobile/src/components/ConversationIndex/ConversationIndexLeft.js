import React from 'react';
import styled from 'styled-components/native';

import { fakeAvatar } from '../../utils/constants';

const AVATAR_SIZE = 50;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  alignItems: center;
`;

const AvatarContainer = styled.View`
  marginTop: 20;
  flex: 1;
  paddingLeft: 5;
  alignItems: flex-start;
  justifyContent: center;
  alignItems: center;
`;

const Avatar = styled.Image`
  height: ${ AVATAR_SIZE } ;
  width: ${ AVATAR_SIZE } ;
  borderRadius: ${ AVATAR_RADIUS };
  backgroundColor: grey;
`;

const avatar = fakeAvatar;

function ConversationLeft() {
  return (
    <Root>
     <AvatarContainer>
       <Avatar source={{ uri: avatar || fakeAvatar }} />
     </AvatarContainer>
    </Root>
  )
}

export default ConversationLeft;
