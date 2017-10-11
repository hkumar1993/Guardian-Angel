import React from 'react';
import styled from 'styled-components/native';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Touchable from '@appandflow/touchable';

import { fakeAvatar } from '../../utils/constants';
import { withNavigation } from 'react-navigation';

const AVATAR_SIZE = 20;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
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
  alignSelf: stretch;
`;

const MetaTopContainer = styled.View`
  flex: 1;
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

const Button = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  flex: 1;
  backgroundColor: green;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-around;
  paddingHorizontal: 32px;
  marginLeft: 5px;
`;

const ButtonText = styled.Text`
  fontSize: 14;
  fontWeight: 500;
  color: ${ props => props.theme.LIGHT_GREY }
`;
// will come from back end later
// const username = 'itsClay';
// const firstName = 'Clay';
// const lastName = 'Shaw';
// const createdAt = '1 day ago';
// const avatar = fakeAvatar;

function NeedCardHeader(props) {
  title = props.title
  avatar = props.avatar
  navigate = props.navigation.navigate
  return (
    <Root>
     <MetaContainer>
       <MetaTopContainer>
         <Button onPress={() => navigate('Profile', {name: 'Brent'})}>
           <ButtonText>
             {title}
           </ButtonText>
         </Button>
       </MetaTopContainer>
     </MetaContainer>
     <AvatarContainer>
       <Avatar source={{ uri: avatar || fakeAvatar }} />
     </AvatarContainer>
    </Root>
  )
}
//  <MetaText style={{ marginLeft: 5 }} >
//    @{username}
//  </MetaText>
// <MetaBottomContainer>
//   <MetaText>
//     { distanceInWordsToNow(createdAt) } ago
//   </MetaText>
// </MetaBottomContainer>
export default withNavigation(NeedCardHeader);
