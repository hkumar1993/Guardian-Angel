import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import Touchable from '@appandflow/touchable';

import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const Root = styled(Touchable).attrs({
  feedback: 'none'
})`
  position: relative;
  backgroundColor: white;
  flexDirection: column;
  justifyContent: flex-start;
  alignItems: center;
  paddingTop: 50;
  height: 100%;
`;

const BottomTextContainer = styled.View`
  height: 20;
  justifyContent: center;
  alignItems: center;
  position: absolute;
  bottom: 5%;
`;

const ButtonLogin = styled(Touchable).attrs({
  feedback: 'opacity',
})`
  justifyContent: center;
  alignItems: center;
`;

const ButtonLoginText = styled.Text`
  color: ${props => props.theme.LIGHT_BLUE};
  fontWeight: 400;
  fontSize: 16;
`;

const LogoImage = styled.Image`
  height: 30%;
  width: 30%;
`;

const initialState = {
  showSignup: false
};

class AuthenticationScreen extends Component {
  state = initialState;

  _onShowSignupPress = () => this.setState({ showSignup: true });
  _onShowLoginPress = () => this.setState({ showSignup: false });

  _onBackPress = () => this.setState({ ...initialState });

  _keyBoardDismiss = () => Keyboard.dismiss();

  render() {
    return (
      <Root onPress={this._keyBoardDismiss}>
        <LogoImage source={{uri: 'http://res.cloudinary.com/dp03o8ur1/image/upload/v1508728247/app-icon_vjh6z6.png'}}/>
        { this.state.showSignup ? <SignupForm  onBackPress={this._onBackPress}/> : <LoginForm onBackPress={this._onBackPress}/>}
        <BottomTextContainer>
          <ButtonLogin onPress={this.state.showSignup ? this._onShowLoginPress : this._onShowSignupPress} >
            <ButtonLoginText>
              { this.state.showSignup ? 'Already have an account?' : 'Don\'t have an account?' }
            </ButtonLoginText>
          </ButtonLogin>
        </BottomTextContainer>
      </Root>
    )
    // if(this.state.showSignup) {
    //   return (
    //
    //   );
    // }else if (this.state.showLogin) {
    //   return (
    //     <Root>
    //
    //     </Root>
    //   );
    // }
    //
    // return (
    //   <Root>
    //     <ButtonSignup onPress={this._onShowSignupPress}>
    //       <ButtonSignupText>Get Started</ButtonSignupText>
    //     </ButtonSignup>
    //

    //
    //   </Root>
    // );
  }
}

export default AuthenticationScreen;
