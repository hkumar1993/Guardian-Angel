import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';

import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { connectActionSheet } from '@expo/react-native-action-sheet';


import { fakeAvatar } from '../utils/constants';
import Loading from './Loading';

// action
import { logout } from '../actions/user';

const AVATAR_SIZE = 30;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  borderRadius: ${AVATAR_RADIUS};
`;

const Button = styled(Touchable).attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  marginLeft: 15;
  justifyContent: center;
  alignItems: center;
`;

class HeaderAvatar extends Component {

  _onOpenActionSheet = () => {
    const options = ['Logout', 'Cancel'];
    const destructiveButtonIndex = 0;
    this.props.showActionSheetWithOptions({
      options,
      destructiveButtonIndex
    }, btnIndex => {
      if(btnIndex === 0) {
        this.props.client.resetStore();
        return this.props.logout().then;
      }
    })
  }

  render() {

    if(!this.props.info) {
      return (
        <Button disabled>
          <Loading size="small" />
        </Button>
      )
    }

    return (
      <Button onPress={this._onOpenActionSheet}>
        <Avatar source={{ uri: this.props.info.avatar || fakeAvatar }} />
      </Button>
    );
  }
}

export default withApollo(
  connect(
    state => ({ info: state.user.info }),
    { logout }
  )(connectActionSheet(HeaderAvatar))
);
