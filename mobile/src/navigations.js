import React, { Component } from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import { Keyboard, StatusBar, View, Platform } from 'react-native';

import { connect } from 'react-redux';
import { FontAwesome, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import { colors } from './utils/constants';

import HomeScreen from './screens/HomeScreen';
import NeedScreen from './screens/NeedScreen';
import ProfileScreenContainer from './screens/ProfileScreenContainer';

import ConversationIndexScreen from './screens/ConversationIndexScreen';
import ConversationScreen from './screens/ConversationScreen';

import DashboardScreen from './screens/DashboardScreen';
import MapScreen from './screens/MapScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import NewNeedScreen from './screens/NewNeedScreen';

import AddNeedButton from './components/AddNeedButton';
import HeaderAvatar from './components/HeaderAvatar';
import ButtonHeader from './components/ButtonHeader';


const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="th-list" />
        ),
        headerLeft: <HeaderAvatar />,
        headerRight: <AddNeedButton navigation={navigation} />
      })
    },

    Profile: {
      screen: ProfileScreenContainer,
      navigationOptions: () => ({
        headerTitle: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="user" />
        )
      })
    },

    ConversationIndex: {
      screen: ConversationIndexScreen,
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
      navigationOptions: ({ navigation }) => ({
        headerLeft: <HeaderAvatar />,
        headerRight: <AddNeedButton navigation={navigation} />
      })
    },

    Conversation: {
      screen: ConversationScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Messages'
      })
    },

    NewNeed: {
      screen: NewNeedScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Add Need'
      })
    },

    Need: {
      screen: NeedScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.need.title}`
      })
    },
    OtherProfile: {
      screen: ProfileScreenContainer,
      navigationOptions: () => ({
        headerTitle: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="user" />
        )
      })
    }
  },{
  cardStyle: {
  },
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 2,
      shadowOpacity: 0.5,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colors.DARK_GREY
    }
  })
});



class AppNavigator extends Component {
  render() {
    console.log(Platform);
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });

    if (!this.props.user.isAuthenticated) {
      return <AuthenticationScreen />;
    }
    return (
      <View style={{height: '100%', width: '100%'}}>
        <StatusBar hidden={ Platform.OS === 'android' ? true : false } />
        <AppMainNav navigation={nav} />
      </View>
    );
  }
}

export default connect(state => ({
  nav: state.nav,
  user: state.user
}))(AppNavigator);

export const router = AppMainNav.router;
