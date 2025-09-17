import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './components/MyText/style';
import MyText from './components/MyText/MyText';

function App() {
  return (
    <SafeAreaView style={style.mainView}>
      <MyText />

    </SafeAreaView>

  );
};
export default App;
