import React, { useState } from 'react';
import { BUTTONS, getResult, OPERATORS, addSymbolToNbr } from '../helpers/CalculatorHelper';
import { View, Text } from 'react-native';
import { styles } from '../styles/Styles'
import MyButton from './MyButton';

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [firstValue, setFirstValue] = useState('');
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();
  const [lastOperation, setLastOperation] = useState('');

  const handleOnPress = (btnValue) => {
    result == 'Syntax Error' ? clear() : null
    if (btnValue == '⌫') {
      return setInput(parseInt(input.toString().slice(0, - 1)))
    }
    if (lastOperation) {
      if (OPERATORS.includes(btnValue)) {
        setLastOperation();
        setFirstValue(result)
      } else {
        clear();
      }
    }
    if (btnValue == '+/-' && input) {
      return setInput(addSymbolToNbr(input))
    }
    if (btnValue == '%') {
      return firstValue ? setInput(parseFloat(input) / 100) : setFirstValue(parseFloat(input) / 100)
    }
    if (btnValue == '=') {
      if (firstValue && operation) {
        let result = getResult(operation, firstValue, input)
        setResult(result)
        setInput('');
        setOperation();
        setLastOperation(`${firstValue}${operation}${input}`)
      } else {
        setResult(input)
        setOperation('')
      }
    }
    else if (btnValue == 'C') {
      clear();
    } else if (OPERATORS.includes(btnValue)) {
      if (input && operation == undefined) {
        setFirstValue(input)
        setInput('');
        setOperation(btnValue)
      } else if (firstValue && !operation) {
        setOperation(btnValue);
        setInput('')
      }
    } else if (input <= 0) {
      setInput(btnValue)
    } else if (firstValue) {
      console.log('asdasd');
      setInput(`${input}${btnValue}`)
    } else if (input > 0 && operation == undefined) {
      setInput(`${input}${btnValue}`)
    } else if (operation != undefined) {
      setFirstValue(input)
      setInput(btnValue)
    }
  };

  const clear = () => {
    setInput('');
    setOperation();
    setFirstValue();
    setLastOperation();
    setResult();
  }

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text} key='input'>{lastOperation ? lastOperation : `${firstValue || ''}${operation || ''}${input || ''}`}</Text>
        </View>
        <View>
          <Text style={styles.text} key='result'>{result}</Text>
        </View>
        {BUTTONS.map(btnArr => {
          return (
            <View style={styles.btnRows} key={btnArr}>
              {btnArr.map((btnValue) => {
                return (
                  <MyButton title={btnValue} key={btnValue} onPress={() => handleOnPress(btnValue)} />
                )
              })}
            </View>
          )
        })}
      </View>
  )
}

export default Calculator;
