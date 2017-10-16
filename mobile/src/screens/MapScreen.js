import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

const Root = styled.View`

`;

const T = styled.Text`

`;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,}
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }

  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >

      </MapView>
    </View>
  );
  }
}

export default MapScreen;
