import React from 'react';
import styled from 'styled-components/native';

import NeedCard from '../NeedCard/NeedCard';
import { ActivityIndicator, FlatList } from 'react-native';

const _renderItem = (props) => <NeedCard {...props}/>

const NeedIndex = ({ data }) => {
  return (
    <FlatList
      contentContainerStyle={{
        alignSelf: 'stretch'
      }}
      data={data}
      keyExtractor={item => item._id}
      renderItem={_renderItem}
      />
  )
}

export default NeedIndex
