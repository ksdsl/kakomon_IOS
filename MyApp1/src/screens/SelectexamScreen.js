import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SelectexamScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Home画面に遷移する"
        onPress={() => {
            navigation.navigate('Home');
        }}
        />
        <Text>試験を選んでください
          2021 2020 2019
        </Text>
        <Button
        title="2021"
        onPress={() => {
            navigation.navigate('ViewPNG');
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

export default SelectexamScreen;