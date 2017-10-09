
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import NeedsIndexItem from './index_item';


const defaultNeeds = {
  1: {
    id: 1,
    title: "Adam needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  2: {
    id: 2,
    title: "Bill needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  3: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  4: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  5: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  6: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  7: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  8: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  9: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  10: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  11: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  12: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  13: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  14: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  15: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  16: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  17: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  18: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  19: {
    id: 3,
    title: "Joe needs a job",
    description: "Reall really really bad. he can do thhings with stuff",
    pictures: [],
    completed: false,
    user: { imageUrl: 'https://robohash.org/my-own-slug.jpg?size=50x50' },
    tags: [{name: 'job'}, {name: 'housing'}],
    location: { zip: 94086 }
  },
  20: {
    id: 3,
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
          data= { Object.values(defaultNeeds) }
          renderItem = { ({ item }) => <NeedsIndexItem need={item} key={item.id}/> }
          keyExtractor={(item, index) => index}
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
