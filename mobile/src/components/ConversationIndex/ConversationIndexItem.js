import React, {Component} from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import Touchable from '@appandflow/touchable';
import { graphql, withApollo, compose } from 'react-apollo';
import { connect } from 'react-redux';

import ConversationIndexLeft from './ConversationIndexLeft';
import ConversationIndexContent from './ConversationIndexContent';
import ConversationIndexHeader from './ConversationIndexHeader';
import Avatar from '../Avatar/Avatar'

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
  paddingVertical: 10;
  paddingHorizontal: 10;
`;

const AvatarContainer = styled.View`
  width: 50;
`;

const ConversationTextContainer = styled.View`
  marginLeft: 10;
  alignItems: center;
  justifyContent: center;
`;


class ConversationIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.nameToDisplay = this.nameToDisplay.bind(this)
  }

  nameToDisplay() {
    // const currentUser = this.props.user.info
    // const recipient = this.props.item.recipient
    // const author = this.props.item.author
    // if (currentUser.username === author.username) {
    //   return recipient.firstName + ' ' + recipient.lastName
    // }
    // return author.firstName + ' ' + author.lastName
    const user = this.userToDisplay()
    return user.firstName + ' ' + user.lastName
  }

  userToDisplay(){
    const currentUser = this.props.user.info
    const recipient = this.props.item.recipient
    const author = this.props.item.author
    if (currentUser.username === author.username) {
      return recipient
    }
    return author
  }

  render() {
    const name = this.nameToDisplay();
    const navigate = this.props.navigation.navigate;
    const conversation = this.props.item;
    console.log("CONVERSATION", conversation);
    console.log("PROPS ConversationIndexItem: ", this.props);

    console.log('Name to display: ', name);
    console.log("THIS ConversationIndexItem", this);
    return (
      <Root onPress={() => navigate('Conversation', { _id: conversation._id})} >
        <ConversationContentContainer>
          <Avatar user={this.userToDisplay()} size={50} />
          <ConversationTextContainer >
            <ConversationIndexHeader name={name} style={{ width: 20 }}/>
          </ConversationTextContainer>
        </ConversationContentContainer>
      </Root>
    );
  }
};

export default withNavigation(ConversationIndexItem);
