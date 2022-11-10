import React, { useState } from 'react';
import { BUTTONS, getResult, OPERATORS, HISTORY } from '../helpers/CalculatorHelper';
import { View, Text } from 'react-native';
import { styles } from '../styles/Styles'
import MyButton from './MyButton';

const Calculator = ({ navigation }) => {
  const [input, setInput] = useState(0);
  const [firstValue, setFirstValue] = useState('');
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();
  const [lastOperation, setLastOperation] = useState('');

  const handleOnPress = (btnValue) => {
    result == 'Syntax Error' ? clear() : null
    if (btnValue == '⌫') {
      if (input == '' && firstValue == '' ){
        return clear();
      } else if (input != '') {
        let newInput = input.toString().length > 1 ? parseInt(input.toString().slice(0, - 1)) : ''
        return setInput(newInput)
      } else if (input == '' && operation) {
        return setOperation();
      } else if (firstValue != '') {
        let newFirstValue = firstValue.toString().length > 1 ? parseInt(firstValue.toString().slice(0, - 1)) : ''
        setFirstValue('')
        return setInput(newFirstValue)
      } else {
        return clear();
      }
    } 
    if (lastOperation) {
      if (OPERATORS.includes(btnValue)) {
        setLastOperation();
        setFirstValue(result)
      } else {
        clear();
      }
    }
    if (btnValue == 'HIST') {
      return navigation.navigate('History');
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
        let lastOp = `${firstValue}${operation}${input}`
        HISTORY.push(lastOp + '=' + result)
        return setLastOperation(lastOp)
      } else {
        setResult(input)
        return setOperation('')
      }
    }
    else if (btnValue == 'C') {
      clear();
    } else if (OPERATORS.includes(btnValue)) {
      if (input && operation == undefined) {
        setFirstValue(input)
        setInput('');
        return setOperation(btnValue)
      } else if (firstValue && !operation) {
        setOperation(btnValue);
        return setInput('')
      } else if (operation && firstValue && input){
        let actualResult = getResult(operation, firstValue, input);
        let lastOp = `${firstValue}${operation}${input}`
        HISTORY.push(lastOp + '=' + actualResult)
        setResult(actualResult)
        setFirstValue(actualResult)
        setOperation(btnValue)
        return setInput('');
      }
    } else if (input <= 0) {
      return setInput(btnValue)
    } else if (firstValue) {
      return setInput(`${input}${btnValue}`)
    } else if (input > 0 && operation == undefined) {
      return setInput(`${input}${btnValue}`)
    } else if (operation != undefined) {
      setFirstValue(input)
      return setInput(btnValue)
    }
    return null;
  };

  const clear = () => {
    setInput('');
    setOperation();
    setFirstValue('');
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
