import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors, angel, shield } from '../../utils/constants';
import { FontAwesome, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { View } from 'react-native'

const Root = styled.View`
  alignItems: stretch;
  flexDirection: column;
  marginTop: 20;
  paddingHorizontal: 10;
`;

const Container = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`;
const UserDetails = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  marginBottom: 20;
`;

const OfferDetails = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

const UserName = styled.Text`
  marginLeft: 10;
  fontSize: 15;
  color: ${colors.DARK_GREY};
  fontWeight: 700;

`;

const UserStats = styled.View`
  flexDirection: row;
  alignItems: center;
  marginBottom: 10;
`;

const DateText = styled.Text`
  color: ${colors.DARK_GREY};
  fontSize: 12;
`;

const MessageButton = styled(Touchable).attrs({
  feedback: 'opacity',
})`
  paddingHorizontal: 25;
  paddingVertical: 8;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${colors.LIGHT_BLUE}
  borderRadius: 5;
  shadowColor: black;
  shadowOffset: 2px 2px;
  shadowRadius: 2;
  shadowOpacity: 0.5;
`;

const ButtonText = styled.Text`
  fontSize: 15;
  fontWeight: 700;
  color: white;
`;

const OfferText = styled.Text`
  fontSize: 15;
  color: ${colors.LIGHT_BLUE};
  alignSelf: flex-end;
`;

const ShieldImage = styled.Image`
  alignSelf: flex-end;
  height: 30;
  width: 30;
  position: relative;
`;

const ShieldText =styled.Text`
  backgroundColor: rgba(0,0,0,0);
  width: 100%;
  position: absolute;
  top: 22%;
  left: 22%;
  color: white;
  fontWeight: 700;
`;

class GuardianInfo extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const user = this.props.user
    return (
      <Root>
        <UserDetails>
          <Container>
            <Avatar user={user} size={40} touchable={true} />
            <UserName>{user.firstName + ' ' + user.lastName}</UserName>
          </Container>
          <DateText>Posted { distanceInWordsToNow(this.props.posted, {addSuffix:true}) }</DateText>
        </UserDetails>
        <OfferDetails>
          <MessageButton>
            <ButtonText>
              Offer Service
            </ButtonText>
          </MessageButton>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{marginRight: 10}}>
              <OfferText>
                Total Offers
              </OfferText>
            </View>
            <ShieldImage source={{uri: shield}}>
              <ShieldText>
                12
              </ShieldText>
            </ShieldImage>
          </View>
        </OfferDetails>
      </Root>
    )
  }
}

export default withNavigation(GuardianInfo)
