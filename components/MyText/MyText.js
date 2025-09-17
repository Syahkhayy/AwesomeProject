import React from "react";
import { Text } from "react-native";
import style from "./style";

const handleTextClick = () => {
    // eslint-disable-next-line no-alert
    alert('The text has been clicked!');
};

const MyText = () => {
    return <Text style={style.text} onPress={() => handleTextClick()}>Hello, React Native World!</Text>
}

export default MyText;