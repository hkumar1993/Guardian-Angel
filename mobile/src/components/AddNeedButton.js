import React, { Component } from 'react';
import { withNavigation } from 'react-navigation'
import { colors } from '../utils/constants';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';


const InfoButton = styled(Touchable).attrs({
  feedback: 'opacity',
})`
  marginRight: 15;
  justifyContent: center;
  alignItems: center;
`;


const InfoText = styled.Text`
  justifyContent: center;
  alignItems: center;
  fontSize: 16;
  fontWeight: 500;
  color: ${ colors.LIGHT_BLUE};
`;

const AddNeedButton = (props) => {
  return (
    <InfoButton onPress={ () => props.navigation.navigate('NewNeed')}>
      <InfoText>Add Need</InfoText>
      </InfoButton>
  )
}


export default AddNeedButton
