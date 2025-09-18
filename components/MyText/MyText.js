import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import style from './style';

const MyText = (props) => {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    console.log('Has been mounted');
    return () => {
      console.log('Component has been destroyeed');
    };
  }, []);

  useEffect(() => {
    console.log('Value of FullName changed');
  }, [fullName]);

  return (
    <Text
      style={style.text}
      onPress={() => {
        setFullName('Syahmi Khairul');
      }}
    >
      Hello, {props.name}! Full name is {fullName}
    </Text>
  );
};

export default MyText;
