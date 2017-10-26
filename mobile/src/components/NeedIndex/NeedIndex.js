import React from 'react';
import styled from 'styled-components/native';

import NeedCard from '../NeedCard/NeedCard';
import { ActivityIndicator, FlatList } from 'react-native';

const Root = styled.View`
  flex: 1;
  justifyContent: center;
  paddingTop: 5;
 `;

class NeedIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  _renderItem = (props) => <NeedCard {...props}/>

  render(){
    const { data } = this.props
    if(this.state.refreshing){
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }
    return (
      <Root>
        <FlatList
          contentContainerStyle={{
            alignSelf: 'stretch'
          }}
          data={data}
          keyExtractor={item => item._id}
          renderItem={this._renderItem}
          />
      </Root>
    )
  }
}

export default NeedIndex
