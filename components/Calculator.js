import React, { useState } from "react";
import MyButton from "./MyButton";
import { BUTTONS, OPERATORS, getResult } from "../helpers/Constants";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../screens/HomeScreen/styles";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { actionCreators } from "../redux/history/actions";

const Calculator = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState();
  const historyArray = useSelector(state => state.history);
  const dispatch = useDispatch();

  const handleOnPress = (btnValue) => {
    btnValue = btnValue == '÷' ? '/' : btnValue == 'x' ? '*' : btnValue
    if (['HIST', 'SAVE'].includes(btnValue)) {
      return handleHistory(btnValue)
    }
    setResult()
    if (btnValue == '=') {
      let res = getResult(input)
      return setResult(res)
    } else {
      if (OPERATORS.includes(btnValue) && OPERATORS.includes(input.slice(-1))) {
        return null;
      } else if (btnValue == 'C') {
        return clear();
      } else if (OPERATORS.includes(btnValue) && input.length == 0) {
        return null;
      } if (btnValue == '⌫') {
        return setInput(input.substr(0, input.length - 1))
      } else if (result && NUMBERS.includes(btnValue)) {
        return setInput(btnValue)
      }
      return setInput(input + btnValue)
    }
  }

  const clear = () => {
    setInput('');
    setResult();
  }

  const handleHistory = (btnValue) => {
    if (btnValue == 'HIST') {
      dispatch(actionCreators.getExpressions())
      return navigation.navigate('History')
    } else if (result == undefined) {
      return null;
    }
    dispatch(actionCreators.saveExpression(setExpressionID(), `${input}=${result}`))
  }

  const setExpressionID = () => {
    return historyArray.length ? historyArray.slice(-1)[0].id + 1 : 1
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text} key='input'>{input}</Text>
        <Text style={styles.text} key='result'>{result}</Text>
      </View>
      {BUTTONS.map(btnArr => {
        return (
          <View style={styles.btnRows} key={btnArr}>
            {btnArr.map((btnValue) => {
              return (
                <MyButton title={btnValue} key={btnValue} input={input} onPress={() => handleOnPress(btnValue)} />
              )
            })}
          </View>
        )
      })}
    </SafeAreaView>
  )
}

export default Calculator;
