import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import { AsyncStorage } from 'react-native';

import reducers from './reducers';

const networkInterface = createNetworkInterface({
  // uri: 'http://localhost:3000/graphql'
  uri: 'https://guardian-angel.herokuapp.com/graphql'
});

// const wsClient = new SubscriptionClient('ws://localhost:3000/subscriptions', {
const wsClient = new SubscriptionClient('ws://guardian-angel.herokuapp.com/subscriptions', {
  reconnect: true,
  connectionParams: {}
})

networkInterface.use([
  {
    async applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      try {
        const token = await AsyncStorage.getItem('@guardian_angel');
        if (token != null) {
          req.options.headers.authorization = `Bearer ${token}` || null;
        }
      } catch (e) {
        throw e;
      }

      return next();
    }
  }
]);

const networkInterfaceWithSubs = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubs
});

const middlewares = [client.middleware(), thunk, createLogger()];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);
