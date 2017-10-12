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
      <AvatarContainer>
        <Avatar source={{ uri: avatar || fakeAvatar }} />
      </AvatarContainer>
     <MetaTopContainer>
       <Button onPress={() => navigate('Need', {need: props.need})}>
         <ButtonText>
           {title}
         </ButtonText>
       </Button>
     </MetaTopContainer>
    </Root>
  )
}

export default withNavigation(NeedCardHeader);
