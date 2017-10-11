import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors, fakeAvatar } from '../utils/constants';

import { Platform, Keyboard, AsyncStorage } from 'react-native';

// graphql
import SIGNUP_MUTATION from '../graphql/mutations/signup'

// Loading state
import Loading from './Loading';

// actions
import { login } from '../actions/user';

const Root = styled.View`
  flex: 1;
  position: relative;
  justifyContent: center;
  alignItems: center;
`;


const Wrapper = styled.View`
  alignSelf: stretch;
  alignItems: center;
  justifyContent: center;
  flex: 1;
`;

const ButtonConfirm = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  position: absolute;
  bottom: 15%;
  width: 70%;
  height: 50;
  backgroundColor: ${props => props.theme.LIGHT_PINK}
  borderRadius: 10;
  justifyContent: center;
  alignItems: center;
  shadowColor: #000;
  shadowOpacity: 0.2;
  shadowRadius: 5;
  shadowOffset: 0px 2px;
  elevation: 2;
`;




const BackButton = styled(Touchable).attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  justifyContent: center;
  alignItems: center;
  position: absolute;
  top: 5%;
  left: 5%;
  zIndex: 1;
`;

const ButtonConfirmText = styled.Text`
  color: ${props => props.theme.TAG_BLUE};
  fontWeight: 600;
`;


const InputWrapper = styled.View`
  height: 50;
  width: 70%;
  borderBottomWidth: 1;
  borderBottomColor: ${props => props.theme.LIGHT_GREY};
  marginVertical: 5;
  justifyContent: flex-end;
`;


const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GREY,
  selectionColor: Platform.OS === 'ios' ? colors.TAG_BLUE : undefined,
  autoCorrect: false
})`
  height: 30;
  color: ${props => props.theme.LIGHT_PINK}
`;

class SignupForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    username: ''
  }

  _onChangeForm = (value, type) => this.setState({ [type]: value });

  _keyBoardDismiss = () => Keyboard.dismiss();

  _disabledButton() {
    const { fullName, email, password, username } = this.state;

    if(!fullName || !email || !password || !username) {
      return true;
    }

    return false;
  }

  _onSignupPress = async () => {
    this.setState({ loading: true });

    const { fullName, email, password, username } = this.state;
    const avatar = fakeAvatar;


    try {
      const {data} = await this.props.mutate({
        variables: {
          fullName,
          email,
          password,
          username,
          avatar
        }
      });
      
      await AsyncStorage.setItem('@guardianangle', data.signup.token);
      this.setState({ loading: false });

      return this.props.login();
    } catch (e) {
      throw e;
    }
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <Root onPress={this._keyBoardDismiss}>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.TAG_BLUE} size={30} name="arrow-back" />
        </BackButton>

        <Wrapper>

          <InputWrapper>
            <Input
              placeholder="Full Name"
              autoCapitalize="words"
              onChangeText={value => this._onChangeForm(value, 'fullName')}
              />
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={value => this._onChangeForm(value, 'email')}
              />
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={value => this._onChangeForm(value, 'password')}
              />
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={value => this._onChangeForm(value, 'username')}
              />
          </InputWrapper>


        </Wrapper>

        <ButtonConfirm
          onPress={this._onSignupPress}
          disabled={this._disabledButton()}
          >
          <ButtonConfirmText>
            Sign Up
          </ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default compose(
  graphql(SIGNUP_MUTATION),
  connect(null, { login })
)(SignupForm);