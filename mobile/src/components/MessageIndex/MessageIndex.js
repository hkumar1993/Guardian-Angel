import React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import Touchable from '@appandflow/touchable';

import MessageIndexLeft from './MessageIndexLeft';
import MessageIndexContent from './MessageIndexContent';
import MessageIndexHeader from './MessageIndexHeader';

const Root = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  minHeight: 80;
  padding: 5px;
  backgroundColor: white;
  width: 100%;
  shadowColor: ${ props => props.theme.LIGHT_BLUE };
  shadowOffset: 0px 5px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
`;

const MessageContentContainer = styled.View`
  flex: 1;
  flexDirection: row;
`;

const AvatarContainer = styled.View`
  width: 50;
`;

const MessageTextContainer = styled.View`
  marginLeft: 5;
`;

function MessageIndex(props) {
  const { navigate } = props.navigation
  return (
    <Root onPress={() => navigate('Conversation')} >
      <MessageContentContainer>
        <AvatarContainer >
          <MessageIndexLeft />
        </AvatarContainer>
        <MessageTextContainer >
          <MessageIndexHeader style={{ width: 20 }}/>
          <MessageIndexContent />
        </MessageTextContainer>
      </MessageContentContainer>
    </Root>
  );
};

export default withNavigation(MessageIndex);
