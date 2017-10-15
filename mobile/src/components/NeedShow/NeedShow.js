import React from 'react';
import styled from 'styled-components/native';

import { withNavigation } from 'react-navigation';
import NeedCardBottom from '../NeedCard/NeedCardBottom';
import GuardianInfo from './GuardianInfo'
const Root = styled.View`
  height: 100%;
  padding: 7px;
  backgroundColor: white;
  width: 100%;
  alignSelf: center;
  flexDirection: column;
  justifyContent: flex-start;
`;


const MapContainer = styled.View`
  height: 40%;
  backgroundColor: ${props => props.theme.TAG_BLUE}
`;

const NeedContentContainer = styled.View`
padding: 10px 20px 10px 10px;
`;

const NeedTitle = styled.Text`
  fontSize: 20;
  textAlign: left;
  fontWeight: 700;
  marginBottom: 10px;
  color: ${ props => props.theme.LIGHT_BLUE}
`;

const NeedDescription = styled.Text`
  fontSize: 16;
  textAlign: left;
  fontWeight: 500;
  color: ${ props => props.theme.DARK_GREY}
`;



// const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'

class NeedShow extends React.Component {

  constructor(props){
    super(props)
    this.state = { need: this.props.navigation.state.params.need }
    console.log(this.state.need);
  }

  render(){
    const need = this.state.need
    return (
      <Root>
        <MapContainer>

        </MapContainer>
        <NeedContentContainer >
          <NeedTitle>
            { need.title }
          </NeedTitle>
          <NeedDescription>
            { need.description }
          </NeedDescription>
        </NeedContentContainer>
        <NeedCardBottom area={area}/>
        <GuardianInfo user={need.user} posted={need.createdAt}/>
      </Root>
    );
  }
};

export default withNavigation(NeedShow);
