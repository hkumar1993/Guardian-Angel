import React, { Component } from 'react';
import styled from 'styled-components/native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './screens/HomeScreen';

// class AppMainNav = StackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });
class AppMainNav = StackNavigator({
  Home: {
    screen: HomeScreen
  }
});

class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });

    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppNavigator);

export const router = AppMainNav.router;
