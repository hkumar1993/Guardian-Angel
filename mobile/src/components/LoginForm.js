import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors, fakeAvatar } from '../utils/constants';

import { Platform, Keyboard, AsyncStorage, Alert } from 'react-native';

// graphql
import LOGIN_MUTATION from '../graphql/mutations/login'

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

class LoginForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    username: ''
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

      await AsyncStorage.setItem('@guardianangle', data.login.token);
      // this.setState({ loading: false });

      return this.props.login();
    } catch (e) {
      console.log("Error": e);
      Alert.alert(
        'Something went wrong',
        e.message
      )
    } finally {
      this.setState({ loading: false });
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

        </Wrapper>

        <ButtonConfirm
          onPress={this._onLoginPress}
          disabled={this._disabledButton()}
          >
          <ButtonConfirmText>
            Sign In
          </ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default compose(
  graphql(LOGIN_MUTATION),
  connect(null, { login })
)(LoginForm);
