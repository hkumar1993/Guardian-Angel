
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const defaultNeeds = {
  1: {
    title: "Adam needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  2: {
    title: "Bill needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  3: {
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
};

export default class NeedsIndex extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data= { [{ key: 'a' }, { key: 'b' }] }
          renderItem = { ({ item }) => <Text>{ item.key }</Text> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
