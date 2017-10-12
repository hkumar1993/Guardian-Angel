import React from 'react';
import styled from 'styled-components/native';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Touchable from '@appandflow/touchable';

import { fakeAvatar } from '../../utils/constants';
import { withNavigation } from 'react-navigation';

const AVATAR_SIZE = 30;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

const AvatarContainer = styled.View`
  flex: 0.2;
  alignItems: center;
  justifyContent: center;
`;

  const Avatar = styled.Image`
  height: ${ AVATAR_SIZE } ;
  width: ${ AVATAR_SIZE } ;
  borderWidth: 2px;
  borderColor: ${props => props.theme.LIGHT_BLUE};
  borderRadius: ${ AVATAR_RADIUS };
`;

//
const MetaContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
`;

const MetaTopContainer = styled.View`
  flex: 0.8;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`;

const Button = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
  marginLeft: 5px;
`;

const ButtonText = styled.Text`
  alignSelf: stretch;
  fontSize: 16;
  fontWeight: 700;
  color: ${ props => props.theme.LIGHT_BLUE }
`;
// will come from back end later
// const username = 'itsClay';
// const firstName = 'Clay';
// const lastName = 'Shaw';
// const createdAt = '1 day ago';
// const avatar = fakeAvatar;

function NeedCardHeader(props) {
  const title = props.title
  const avatar = props.avatar
  const navigate = props.navigation.navigate
  return (
    <Root>
     <MetaTopContainer>
       <Button onPress={() => navigate('Need', {need: props.need})}>
         <ButtonText>
           {title}
         </ButtonText>
       </Button>
     </MetaTopContainer>
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
