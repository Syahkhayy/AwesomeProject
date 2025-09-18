import React, { Component } from 'react';
import { Text } from 'react-native';
import style from './style';

class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: props.name + ' Khairul',
    };
  }

  render() {
    return <Text style={style.text}>Hello, {this.props.name}!</Text>;
  }
}

export default MyText;
