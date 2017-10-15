import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors, angel, shield } from '../../utils/constants';
import { FontAwesome, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { View } from 'react-native'
import Loading from '../Loading'

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { GET_NEED_REQUESTS } from '../../graphql/queries/getRequests'
import CREATE_NEED_REQUEST from '../../graphql/mutations/createNeedRequest'


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
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

const ShieldText =styled.Text`
  backgroundColor: rgba(0,0,0,0);
  width: 100%;
  textAlign: center;
  alignSelf: center;
  color: white;
  fontWeight: 700;
`;

const disabledButton = {
  backgroundColor: `rgba(0,0,0,0.2)`
}

const disabledButtonText = {
  color: `rgba(255,255,255,0.2)`
}

class GuardianInfo extends Component {

  constructor(props){
    super(props)
    this.state = { needRequests: null, requested: null }
  }

  componentWillMount(){
    this.getRequests()
  }

  componentWillReceiveProps(){
    console.log("NEW PROPS!!");
  }

  getRequests() {
    console.log("IN HERE!!");
    this._getNeedRequests(this.props._id).
      then(res => {
        console.log("RES", res);
        let requested = false
        res.getNeedRequests.forEach(needRequest => {
          requested = requested || needRequest.user._id === this.props.currentUser.info._id
        })
        this.setState({needRequests: res.getNeedRequests, requested})
      }
    )
  }

  _getNeedRequests = async (id) => {
    console.log("IN HERE NOW!!");
    try {
      const { data } = await this.props.client.query({
        query: GET_NEED_REQUESTS,
        variables: {
          _id: id
        }
      })
      return data
    } catch (e) {
      return null
    }
  }

  _offerRequest = async () => {
    this.setState({needRequests: null})
    try {
      console.log("TRYING");
      const _id = this.props._id
      const user = this.props.currentUser.info
      const need = this.props.need
      const { data } = await this.props.mutate({
        variables: {
          user: this.props.currentUser.info._id,
          need: this.props._id
        }
      })
      console.log("DATA", data);
    } catch(e) {
      console.log("error",e);
      console.log("failed");
      return null
    } finally {
      console.log("FINALLY");
      this.getRequests()
    }
  }

  render() {
    const user = this.props.user
    const currentUser = this.props.currentUser.info
    const isCurrentUser = user.username === currentUser.username
    console.log("Info Props",this.props);
    console.log("Info State",this.state);
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
          <MessageButton style={isCurrentUser ? disabledButton : {}} disabled={isCurrentUser ? true : false} onPress={this._offerRequest}>
            <ButtonText style={isCurrentUser ? disabledButtonText : {}}>
              Offer Service
            </ButtonText>
          </MessageButton>

            {
              this.state.needRequests !== null ? (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{marginRight: 10}}>
                    <OfferText>
                      Total Offers
                    </OfferText>
                  </View>
                  <ShieldImage source={{uri: shield}}>
                    <ShieldText>
                      { this.state.needRequests.length}
                    </ShieldText>
                  </ShieldImage>
                </View>
              ) : (
                <Loading />
              )
            }
        </OfferDetails>
      </Root>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => {
  console.log
}

export default withApollo(
  compose(
    connect(state => ({}), null),
    graphql(CREATE_NEED_REQUEST),
    graphql(GET_NEED_REQUESTS)
  )(withNavigation(GuardianInfo))
)
