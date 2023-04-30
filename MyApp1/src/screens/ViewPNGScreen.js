//import React, { Component } from 'react';
//import { View, Image } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           style={{
//             width: 64,
//             height: 64
//           }}
//           source={require('../PNG/test.png')}
      
        
//         />
//       </View>
//     );
//   }
// }
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('App', () => App);