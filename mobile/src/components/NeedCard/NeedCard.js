import React from 'react';
import styled from 'styled-components/native';

import NeedCardHeader from './NeedCardHeader';
import NeedCardBottom from './NeedCardBottom';

const Root = styled.View`
  minHeight: 180;
  padding: 7px;
  backgroundColor: ${ props => props.theme.LIGHT_GREY };
  width: 100%;
  shadowColor: ${ props => props.theme.LIGHT_BLUE };
  shadowOffset: 0px 5px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
  marginVertical: 5;
`;

const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 10px;
`;

const CardContentText = styled.Text`
  fontSize: 14;
  textAlign: left;
  fontWeight: 500;
  color: ${ props => props.theme.TAG_BLUE}
`;

// const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

function NeedCard({ description, user, createdAt }) {
    return (
      <Root>
        <NeedCardHeader {...user} createdAt={createdAt} />
        <CardContentContainer >
          <CardContentText>
            {description}
          </CardContentText>
        </CardContentContainer>
        <NeedCardBottom />
      </Root>
    );
};

export default NeedCard;
