import React from 'react';
import styled from 'styled-components/native';

// use compose to call query or mutation
// use withApollo to use access to the Apollo client --> this.props.client
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { ActivityIndicator, FlatList } from 'react-native';

import NeedIndex from '../components/NeedIndex/NeedIndex'
import { getUserInfo } from '../actions/user';

// graphql queries
import GET_NEEDS_QUERY from '../graphql/queries/getNeeds';
import ME_QUERY from '../graphql/queries/me';
import NEED_ADDED_SUBSCRIPTION from '../graphql/subscriptions/needAdded';

const Root = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  justifyContent: center;
  paddingTop: 15;
 `;


class HomeScreen extends React.Component {

  componentWillMount() {
    console.log("This.props====== ", this.props );
    console.log("This.props.Data====== ", this.props.data  );
    this.props.data.subscribeToMore({
      document: NEED_ADDED_SUBSCRIPTION,
      updateQuery: ( prev, { subscriptionData }) => {
        console.log("prev===", prev);
        console.log("subscriptionData===", subscriptionData);
        console.log("subscriptionData data===", subscriptionData.data);
        if(!subscriptionData.data) {
          console.log("prev inside", prev);
          return prev;
        }

        const newNeed = subscriptionData.data.needAdded;
        console.log("newNeed====", newNeed);

        if(!prev.getNeeds.find(need => need._id === newNeed._id)) {

          return {
            ...prev,
            getNeeds: [{ ...newNeed }, ...prev.getNeeds ]
          }
        }

        return prev;
      }
    });
  }

  componentDidMount() {
    this._getUserInfo();
  }

  _getUserInfo = async () => {
    const { data: { me } } = await this.props.client.query({ query: ME_QUERY });

    this.props.getUserInfo(me);
  }

  _renderItem = (props) => <NeedCard {...props}/>

  render() {
    const { data } = this.props;
    if(data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }

    return (
      <Root>
        <NeedIndex data={data.getNeeds} />
      </Root>
    )
  }
}

// use compose to call query or mutation
// use withApollo to use access to the Apollo client --> this.props.client
export default withApollo(
  compose(
    connect(null, { getUserInfo }),
    graphql(GET_NEEDS_QUERY)
  )(HomeScreen)
);
