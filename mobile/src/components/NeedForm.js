import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors, fakeAvatar } from '../utils/constants';

import { Platform, Keyboard, AsyncStorage } from 'react-native';

// // graphql
// import SIGNUP_MUTATION from '../graphql/mutations/signup'

// // actions
// import { login } from '../actions/user';

// Loading state
import Loading from './Loading';

const Root = styled.View`
  flex: 1;
  position: relative;
  justifyContent: center;
  alignItems: center;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GREY,
  selectionColor: Platform.OS === 'ios' ? colors.TAG_BLUE : undefined,
  autoCorrect: false
})`
  height: 30;
  color: ${props => props.theme.LIGHT_PINK}
`;



class NeedForm extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    tags: ''
  }

  _onChangeForm = (value, type) => this.setState({ [type]: value });

  _keyBoardDismiss = () => Keyboard.dismiss();

  _disabledButton() {
    const { title, description, location, tags } = this.state;
    if(!title || !description || !location || !tags) {
      return true;
    }
    return false;
  }

  _onSubmitPress = async () => {
    this.setState({ loading: true });

    const { title, description, location, tags } = this.state;

    // try {
    //   const {data} = await this.props.mutate({
    //     variables: {
    //       title,
    //       description,
    //       location,
    //       tags,
    //     }
    //   });
    //
    //   await AsyncStorage.setItem('@guardianangle', data.signup.token);
    //   this.setState({ loading: false });
    //
    //   return this.props.login();
    // } catch (e) {
    //   throw e;
    // }
  }

  render() {
    <Root>
      <Input
        placeholder="Title"
        onChangeText={value => this._onChangeForm(value,'title')}
        />
      <Input
        placeholder="Description"
        onChangeText={value => this._onChangeForm(value,'description')}
        />
      <Input
        placeholder="Location"
        onChangeText={value => this._onChangeForm(value,'location')}
        />
      <Input
        placeholder="Tags"
        onChangeText={value => this._onChangeForm(value,'tags')}
        />
    </Root>
  }

}

export default compose(
  graphql(SIGNUP_MUTATION),
  connect(null, { login })
)(SignupForm);
