import React, { useState, useEffect, useRef, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, View } from 'react-native';
import style from './components/MyText/style';
import MyText from './components/MyText/MyText';
import { ThemeContext } from './context/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView style={style.mainView}>
        <View style={{ backgroundColor: isDarkMode ? '#222222' : '#ffffff', height: 100 }}>
          <MyText index={1} />
        </View>
        <HomeScreen />
        <Button title={"Switch Mode"} onPress={toggleTheme} />
      </SafeAreaView>
    </ThemeContext.Provider>


  );
};
export default App;
