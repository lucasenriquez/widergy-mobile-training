import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { NUMBERS } from '../helpers/Constants';
import { styles } from '../screens/HomeScreen/styles';

const MyButton = ({onPress, title, input}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.button,  ...{backgroundColor: buttonColor(title , input)}}}>
            <Text style={{color: title == '⌫' ? 'white' : 'black', fontSize: 25}}>{title}</Text>
        </TouchableOpacity>
    )
};

const buttonColor = (title, input) => {
    if (NUMBERS.includes(title)) {
        return 'white'
    } else if (title == '⌫'){
        return input == '' ? '#dbd9d9' : '#3f3f3f'
    } else if (title == 'C'){
        return '#ff6666'
    }
    return '#a0f7ea'
}

export default MyButton;
