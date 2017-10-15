import React from 'react';
import styled from 'styled-components/native';

import NeedCardHeader from './NeedCardHeader';
import NeedCardBottom from './NeedCardBottom';

import { withNavigation } from 'react-navigation';

const Root = styled.View`
  minHeight: 180;
  padding: 10px;
  backgroundColor: white;
  width: 95%;
  alignSelf: center;
  shadowColor: black;
  shadowOffset: 0px 5px;
  shadowRadius: 2;
  shadowOpacity: 0.5;
  marginVertical: 5;
  borderRadius: 8px;
`;

const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 10px;
`;

const CardContentText = styled.Text`
  fontSize: 14;
  textAlign: left;
  fontWeight: 500;
  color: ${ props => props.theme.DARK_GREY}
`;

// const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

function NeedCard({item, item: { title, description, user, area, createdAt }, navigation}) {
    const headInfo = {
      need: item,
      title,
      user,
      navigation
    }
    return (
      <Root>
        <NeedCardHeader {...headInfo} createdAt={createdAt} />
        <CardContentContainer >
          <CardContentText>
            {description}
          </CardContentText>
        </CardContentContainer>
        <NeedCardBottom area={area} />
      </Root>
    );
};

export default withNavigation(NeedCard);
