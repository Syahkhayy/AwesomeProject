import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: 'green'
      }}>
        <View style={{
          backgroundColor: 'red',
          marginVertical: 20,
          padding: 10,
          marginHorizontal: 50,
        }}>
          <Text style={{
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: '200',
            textAlign: 'right'

          }}>Hi, I just completed my first React Native Assignment!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
