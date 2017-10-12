import React, { Component } from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import { connect } from 'react-redux';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from './utils/constants';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessagesScreen from './screens/MessagesScreen';
import DashboardScreen from './screens/DashboardScreen';
import MapScreen from './screens/MapScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import HeaderAvatar from './components/HeaderAvatar';
<<<<<<< HEAD
import AddNeedButton from './components/AddNeedButton';

import NeedScreen from './screens/NeedScreen';
import NeedFormScreen from './screens/NeedFormScreen';
=======

import NeedScreen from './screens/NeedScreen';
>>>>>>> master

const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="th-list" />
        )
      })
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTitle: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="user" />
        )
      })
    },

    Messages: {
      screen: MessagesScreen,
      navigationOptions: () => ({
        headerTitle: 'Messages',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="bubble"
          />
        )
      })
    },

    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: () => ({
        headerTitle: 'Dashboard',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="dashboard"
          />
        )
      })
    },

    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        headerTitle: 'Location',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="map" />
        )
      })
    }
  },
 {
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: 'white',
    activeBackgroundColor: colors.DARK_BLUE,
    inactiveTintColor: 'white',
    style: {
      backgroundColor: colors.LIGHT_BLUE,
      height: 50,
    }
  }
});
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

const InfoText = styled.Text`
  justifyContent: center;
  alignItems: center;
`;

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: ( { navigation }) => ({
        headerLeft: <HeaderAvatar />,
        headerRight: <AddNeedButton navigation={navigation} />
      })
    },
    Need: {
      screen: NeedScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.need.title}`
      })
    },
    NeedForm: {
      screen: NeedFormScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Add Need'
      })
    }
  },{
  cardStyle: {
  },
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'white'
    },
    Need: {
      screen: NeedScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.need.title}`
      })
    }
  },
  {
    cardStyle: {},
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: colors.DARK_GREY
      }
    })
  }
);



class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });

    if (!this.props.user.isAuthenticated) {
      return <AuthenticationScreen />;
    }

    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
  user: state.user
}))(AppNavigator);

export const router = AppMainNav.router;
