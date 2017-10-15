/* eslint-disable no-console */

import express from "express";

import { createServer } from "http";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'

import "./config/db";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import constants from "./config/constants";
import middlewares from "./config/middlewares";
import mocks from "./mocks";

const app = express();

middlewares(app);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
    subscriptionsEndpoint: `ws://localhost:${constants.PORT}${constants.SUBSCRIPTIONS_PATH}`
  })
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user
    }
  }))
);

const graphQLServer = createServer(app);

// mocks().then(() => {
graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    new SubscriptionServer(
      {
        schema,
        execute,
        subscribe
      },
      {
        server: graphQLServer,
        path: constants.SUBSCRIPTIONS_PATH
      }
    );
    console.log(`App listen to port: ${constants.PORT}`);
  }
});
// });

// Landing Page
var path = require('path');
app.use(express.static(__dirname + '/view'));
//Store all HTML files in view folder.

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
