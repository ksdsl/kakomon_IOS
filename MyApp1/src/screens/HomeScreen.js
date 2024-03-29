import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Detail画面に遷移する"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <Button
        title="試験選択へ"
        onPress={() => {
          navigation.navigate('Selectexam');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;