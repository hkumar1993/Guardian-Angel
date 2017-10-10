import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';


export default class NeedsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.need;
  }

  render(){
    return (
      <View>
        <Image source={{uri: `${this.state.user.imageUrl}`}} style={{width: 50, height: 50, borderRadius: 25}} />
        <Text>{this.state.title}</Text>
        <Text>{this.state.description}</Text>
        <Text>{this.state.location.zip}</Text>
        {
          this.state.tags.map(tag => <Text key={tag.name}>{tag.name}</Text>)
        }
      </View>
    );
  }

}
