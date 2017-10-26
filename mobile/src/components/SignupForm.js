import React, { Component } from 'react';
import { Platform, Keyboard, AsyncStorage, Alert } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors, fakeAvatar } from '../utils/constants';


// graphql
import SIGNUP_MUTATION from '../graphql/mutations/signup'

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


const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GREY,
  selectionColor: Platform.OS === 'ios' ? colors.TAG_BLUE : undefined,
  autoCorrect: false,
  underlineColorAndroid: 'transparent'
})`
  height: 30;
  color: ${props => props.theme.DARK_GREY}
`;

const ErrorText = styled.Text`
  color: rgb(193, 29, 42);
`;

class SignupForm extends Component {
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

      await AsyncStorage.setItem('@guardian_angel', data.signup.token);
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

  render() {
    if(this.state.loading) {
      return <Loading />;
    }
    // {this.state.errors.length > 0 ? this.state.errors.map((e,i) => <ErrorText key={i}>{e}</ErrorText>) : null}

    return (
      <Root onPress={this._keyBoardDismiss}>
          {this.state.errors.length > 0 ? (
            Alert.alert('Something Went Wrong', this.state.errors.map((e,i) => e)[0])
          ): null}

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
          {
            this.state.loading ? (
              <Loading size={1}/>
            ) : (
              <ButtonConfirm
              onPress={this._onSignupPress}
              >
              <ButtonConfirmText>
                Sign Up
              </ButtonConfirmText>
            </ButtonConfirm>
          )
          }

      </Root>
    );
  }
}

export default compose(
  graphql(SIGNUP_MUTATION),
  connect(null, { login })
)(SignupForm);
