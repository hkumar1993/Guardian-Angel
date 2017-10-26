import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors, fakeAvatar } from '../utils/constants';

import { Platform, Keyboard, AsyncStorage, Alert, View } from 'react-native';

// graphql
import LOGIN_MUTATION from '../graphql/mutations/login'

// Loading state
import Loading from './Loading';

// actions
import { login } from '../actions/user';

const Root = styled(Touchable).attrs({
  feedback: 'none'
})`
  width: 100%;
  position: relative;
  justifyContent: flex-start;
  alignItems: center;
  paddingTop: 30;
`;

const rootStyle = {
  width: '100%',
  position: 'relative',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: 30,
}

const ButtonContainer = styled.View`
  width: 100%;
  alignSelf: center;
  alignItems: center;
`;

const ButtonConfirm = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  width: 85%;
  height: 50;
  backgroundColor: ${props => props.theme.LIGHT_BLUE}
  borderRadius: 10;
  justifyContent: center;
  alignItems: center;
  shadowColor: #000;
  shadowOpacity: 0.2;
  shadowRadius: 5;
  shadowOffset: 0px 2px;
  elevation: 2;
  marginTop: 5;
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
  color: white;
  fontWeight: 600;
`;

const ErrorText = styled.Text`
  color: rgb(193, 29, 42);
`;


const InputWrapper = styled.View`
  height: 50;
  width: 85%;
  borderWidth: 1;
  borderColor: ${props => props.theme.LIGHT_GREY};
  paddingVertical: 10;
  paddingHorizontal: 10;
  marginVertical: 5;
  justifyContent: center;
  borderRadius: 5;
`;

Keyboard.dismiss();

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GREY,
  selectionColor: Platform.OS === 'ios' ? colors.TAG_BLUE : undefined,
  autoCorrect: false,
  underlineColorAndroid: 'transparent'
})`
  height: 30;
  color: ${props => props.theme.DARK_GREY};
`;

class LoginForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    username: '',
    errors: []
  }

  _onChangeForm = (value, type) => this.setState({ [type]: value });

  _keyBoardDismiss = () => Keyboard.dismiss();

  _disabledButton() {
    const {  email, password } = this.state;

    if(!email || !password ) {
      return true;
    }

    return false;
  }

  _onLoginPress = async () => {
    this.setState({ loading: true });

    const { email, password } = this.state;

    try {
      const {data} = await this.props.mutate({
        variables: {
          email,
          password,
        }
      });

      await AsyncStorage.setItem('@guardian_angel', data.login.token);
      this.setState({ loading: false });

      return this.props.login();
    } catch (e) {
      const errors = [];
      e["graphQLErrors"].forEach(error => {
          errors.push(error['message']);
      });
      this.setState({ loading: false, errors });
    }
  }

  _demoLogin = async () => {
    this.setState({ loading: true, email: 'john@doe.com', password: '123456' });

    const { email, password } = {email: 'john@doe.com', password: '123456'}

    try {
      const {data} = await this.props.mutate({
        variables: {
          email,
          password,
        }
      });

      await AsyncStorage.setItem('@guardian_angel', data.login.token);
      this.setState({ loading: false });

      return this.props.login();
    } catch (e) {
      const errors = [];
      e["graphQLErrors"].forEach(error => {
          errors.push(error['message']);
      });
      this.setState({ loading: false, errors });
    }
  }

  // <BackButton onPress={this.props.onBackPress}>
  //   <MaterialIcons color={colors.TAG_BLUE} size={30} name="arrow-back" />
  // </BackButton>

  render() {
    // if(this.state.loading) {
    //   return <Loading />;
    // }


    return (
      <Root>
        {this.state.errors.length > 0 ? (Alert.alert('Something Went Wrong', 'Invalid Username / Password')) : null}

          <InputWrapper>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={value => this._onChangeForm(value, 'email')}
              value={this.state.email}
              />
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={value => this._onChangeForm(value, 'password')}
              value={this.state.password}
              />
          </InputWrapper>

          {
            this.state.loading ? (
              <Loading size={1}/>
            ) : (
              <ButtonContainer>
                <ButtonConfirm
                onPress={this._onLoginPress}
                >
                  <ButtonConfirmText>
                    Sign In
                  </ButtonConfirmText>
                </ButtonConfirm>
                <ButtonConfirm
                onPress={this._demoLogin}
                >
                  <ButtonConfirmText>
                    Demo Sign In
                  </ButtonConfirmText>
                </ButtonConfirm>
              </ButtonContainer>
            )
          }
        </Root>
    );
  }
}

export default compose(
  graphql(LOGIN_MUTATION),
  connect(null, { login })
)(LoginForm);
