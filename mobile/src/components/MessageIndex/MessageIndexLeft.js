import React from 'react';
import styled from 'styled-components/native';

import { fakeAvatar } from '../../utils/constants';

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
  backgroundColor: yellow;
`;

const AvatarContainer = styled.View`
  flex: 1;
  paddingLeft: 5;
  alignItems: flex-start;
  justifyContent: center;
  backgroundColor: red;

`;

const Avatar = styled.Image`
  height: ${ AVATAR_SIZE } ;
  width: ${ AVATAR_SIZE } ;
  borderRadius: ${ AVATAR_RADIUS };
`;

const avatar = fakeAvatar;

function MessageLeft() {
  return (
    <Root>
     <AvatarContainer>
       <Avatar source={{ uri: avatar }} />
     </AvatarContainer>
    </Root>
  )
}

export default MessageLeft;
