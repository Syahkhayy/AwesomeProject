import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './components/MyText/style';
import MyText from './components/MyText/MyText';
import { Button, Text } from 'react-native';
import useToggle from './customHooks/UseToggle';


function App() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <SafeAreaView style={style.mainView}>
      <Text>{isOn ? 'ON' : 'OFF'}</Text>
      <Button title={'Toggle'} onPress={toggleIsOn} />
    </SafeAreaView>


  );
};
export default App;
