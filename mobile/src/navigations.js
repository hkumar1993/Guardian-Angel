import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessagesScreen from './screens/MessagesScreen';
import ConversationScreen from './screens/ConversationScreen';
import DashboardScreen from './screens/DashboardScreen';
import MapScreen from './screens/MapScreen';
import { colors } from './utils/constants'

const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTitle: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome size={ TAB_ICON_SIZE } color={ tintColor } name="th-list"/>
      )
    })
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      headerTitle: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome size={ TAB_ICON_SIZE } color={ tintColor } name="user"/>
      )
    })
  },

  Messages: {
    screen: MessagesScreen,
    navigationOptions: () => ({
      headerTitle: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons size={ TAB_ICON_SIZE } color={ tintColor } name="bubble"/>
      )
    })
  },

  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: () => ({
      headerTitle: 'Dashboard',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome size={ TAB_ICON_SIZE } color={ tintColor } name="dashboard"/>
      )
    })
  },

  Map: {
    screen: MapScreen,
    navigationOptions: () => ({
      headerTitle: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome size={ TAB_ICON_SIZE } color={ tintColor } name="map"/>
      )
    })
  },



}, {
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: 'blue',
    inactiveTintColor: colors.LIGHT_GREY,
    style: {
      backgroundColor: colors.TAG_BLUE,
      height: 50,
      paddingVertical: 5
    }
  }
})

const AppMainNav = StackNavigator({
  Home: {
    screen: Tabs
  },
  Profile: {
    screen: ProfileScreen
  },
  Conversation: {
    screen: ConversationScreen,
    navigationOptions: () => ({
      headerTitle: 'UserNameHere'
    })
  },
}, {
  cardStyle: {
  },
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'white'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colors.DARK_GREY
    }
  })
});

class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppNavigator);

export const router = AppMainNav.router;
