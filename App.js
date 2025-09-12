import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaView>
      <View style={{
        borderWidth: 1,
        marginTop: 20,
        borderColor: '#0fa328ff',
        borderRadius: 10,
        padding: 10,
      }}>
        <Text>Hi, I just completed my first React Native Assignment!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
