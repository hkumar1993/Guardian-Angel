import React from 'react';
import { UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';
// css styled themes we can use
import { ThemeProvider } from 'styled-components';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';

import Welcome from './src/components/Welcome';
import NeedsIndex from './src/screens/needs/index';
import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

// automatically animate ui
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <AppNavigation />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
