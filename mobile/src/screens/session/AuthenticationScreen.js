import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const initialState = {
  showSignup: false,
  showLogin: false,
};

export default class AuthenticationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  _onShowSignupPress() {
    this.setState({ showSignup: true });
  }
  _onBackPress() {
    this.setState({ ...initialState });
  }

  render() {
    if (this.state.showSignup) {
      return (
        <Text>...Implement Sign up form component</Text>
      )
    }
    return (
      <Button
        onPress={this._onShowSignupPress}
        title="Sign Up"
      />
    )
  }

}
