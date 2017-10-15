import React from 'react';
import { UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { AppLoading } from 'expo';

// css styled themes we can use
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';

// import Welcome from './src/components/Welcome';
// import NeedsIndex from './src/screens/needs/index';
// import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

// action
import { login } from './src/actions/user';

// automatically animate ui
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  state = {
    appReady: false
  }; 

  componentWillMount() {
    this._checkToken();
  }

  _checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@guardian_angel');
      console.log('Token ===== before', token);
      if (token != null) {
        console.log('Token ===== inside', token);
        // store.dispatch({ type: 'LOGIN' })
        store.dispatch(login());
      }
    } catch (e) {
      throw e;
    }

    this.setState({ appReady: true });
  };

  render() {
    if (!this.state.appReady) {
      return <AppLoading />;
    }

    return (
      <ApolloProvider store={store} client={client}>
        <ActionSheetProvider>
          <ThemeProvider theme={colors}>
            <AppNavigation />
          </ThemeProvider>
        </ActionSheetProvider>
      </ApolloProvider>
    );
  }
}
