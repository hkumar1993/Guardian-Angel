import React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { graphql, withApollo, compose } from 'react-apollo';

import ConversationIndexItem from './ConversationIndexItem'
import { ActivityIndicator, FlatList } from 'react-native';

class ConversationIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderItem = (props) => <ConversationIndexItem {...props} user={this.props.user}/>

  render(){
    console.log('PROPS ConversationIndex', this.props);
    const { data, user, conversationList } = this.props;
    return (
      <FlatList
        contentContainerStyle={{
          alignSelf: 'stretch'
        }}
        data={conversationList}
        extraData={this.state}
        keyExtractor={item => item._id}
        renderItem={this._renderItem}
        />
    )
  }
}

// export default withNavigation(ConversationIndex);

export default withApollo(compose(
  connect( state => {
            return {
              user: state.user,
              _id: state.user.info._id
            }
          }, null)
)(withNavigation(ConversationIndex)));
