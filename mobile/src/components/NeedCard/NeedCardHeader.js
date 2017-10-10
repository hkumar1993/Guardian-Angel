import React from 'react';
import styled from 'styled-components/native';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

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
  flex: 0.2;
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

//
const MetaContainer = styled.View`
  flex: 1;
  backgroundColor: blue;
  alignSelf: stretch;
`;

const MetaTopContainer = styled.View`
  flex: 1;
  backgroundColor; pink;
  alignSelf: stretch;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`;

const MetaBottomContainer = styled.View`
  flex: 0.8;
  backgroundColor; black;
  alignSelf: stretch;
  alignItems: flex-start;
  justifyContent: center;
`;

const MetaText = styled.Text`
  fontSize: 14;
  fontWeight: 600;
  color: ${ props => props.theme.TAG_BLUE  }
`;

const MetaFullName = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  color = ${ props => props.theme.TAG_BLUE }
`;

// will come from back end later
// const username = 'itsClay';
// const firstName = 'Clay';
// const lastName = 'Shaw';
// const createdAt = '1 day ago';
// const avatar = fakeAvatar;

function NeedCardHeader({ username, firstName, lastName, avatar, createdAt }) {
  return (
    <Root>
     <AvatarContainer>
       <Avatar source={{ uri: avatar || fakeAvatar }} />
     </AvatarContainer>
     <MetaContainer>
       <MetaTopContainer>
         <MetaFullName>
           { firstName } { lastName }
         </MetaFullName>
         <MetaText style={{ marginLeft: 5 }} >
           @{username}
         </MetaText>
       </MetaTopContainer>
       <MetaBottomContainer>
         <MetaText>
           { distanceInWordsToNow(createdAt) } ago
         </MetaText>
       </MetaBottomContainer>
     </MetaContainer>
    </Root>
  )
}

export default NeedCardHeader;
