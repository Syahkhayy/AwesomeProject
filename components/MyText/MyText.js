import React from "react";
import { Text } from "react-native";
import style from "./style";


const MyText = ({ index }) => {
    return <Text style={style.text} onPress={() => handleTextClick()}>{"Hello, React Native World! " + index}</Text>
}

const handleTextClick = () => {
    // eslint-disable-next-line no-alert
    alert('The text has been clicked!');
};


export default MyText;