import React, { useState, Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './components/MyText/style';
import MyText from './components/MyText/MyText';
import { Button, Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Component is mounted!');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Checking if component should update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Getting snapshot before component update');
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component has updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <SafeAreaView style={style.mainView}>
        <Text
          onPress={() => {
            this.setState({ name: 'Syahmi' });
          }}
        >
          Hi, {this.state?.name}{' '}
        </Text>
        <View>
          <MyText name={'Syahmi'} />
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
