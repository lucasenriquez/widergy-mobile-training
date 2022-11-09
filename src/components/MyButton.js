import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { NUMBERS } from '../helpers/CalculatorHelper';
import { styles } from '../styles/Styles';

const MyButton = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.button,  ...{backgroundColor: buttonColor(title)}}}>
            <Text style={{color: title == '⌫' ? 'white' : 'black', fontSize: 25}}>{title}</Text>
        </TouchableOpacity>
    )
};

const buttonColor = (title) => {
    if (NUMBERS.includes(title)) {
        return 'gray'
    } else if (title == '⌫'){
        return '#3f3f3f'
    } else if (title == 'C'){
        return '#ff6666'
    }
    return '#7198fc'
}

export default MyButton;
