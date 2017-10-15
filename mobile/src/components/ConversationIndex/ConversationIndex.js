import React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import Touchable from '@appandflow/touchable';

import ConversationIndexLeft from './ConversationIndexLeft';
import ConversationIndexContent from './ConversationIndexContent';
import ConversationIndexHeader from './ConversationIndexHeader';


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

const ConversationContentContainer = styled.View`
  flex: 1;
  flexDirection: row;
`;

const AvatarContainer = styled.View`
  width: 50;
`;

const ConversationTextContainer = styled.View`
  marginLeft: 5;
`;

function ConversationIndex(props) {
  const { navigate } = props.navigation
  return (
    <Root onPress={() => navigate('Conversation')} >
      <ConversationContentContainer>
        <AvatarContainer >
          <ConversationIndexLeft />
        </AvatarContainer>
        <ConversationTextContainer >
          <ConversationIndexHeader style={{ width: 20 }}/>
          <ConversationIndexContent />
        </ConversationTextContainer>
      </ConversationContentContainer>
    </Root>
  );
};

export default withNavigation(ConversationIndex);
