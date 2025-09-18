import React, { useState, Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './components/MyText/style';
import MyText from './components/MyText/MyText';
import { Button, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.mainView}>
      <MyText name={'Syahmi'} />
    </SafeAreaView>
  );
};
export default App;

// componentDidMount() {
//   console.log('Component is mounted!');
// }

// shouldComponentUpdate(nextProps, nextState, nextContext) {
//   console.log('Checking if component should update');
//   return true;
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//   console.log('Getting snapshot before component update');
//   return null;
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log('Component has updated');
// }

// componentWillUnmount() {
//   console.log('Component will unmount');
// }
