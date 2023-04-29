import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 64,
            height: 64
          }}
          //source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          source={require('../PDF/test.png')}
      
        
        />
      </View>
    );
  }
}
