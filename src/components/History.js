import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HISTORY } from '../helpers/CalculatorHelper';
import { styles } from '../styles/Styles';

const History = ({ navigation }) => {
    const [history, setHistory] = useState(HISTORY);

    const clearHistory = () => {
        HISTORY.splice(0, HISTORY.length)
        return setHistory([])
    }

    return (
        <View style={styles.historyContainer}>
            <View>
                {history.map((operation) => {
                    return (
                        <View key={operation} style={styles.history}>
                            <Text style={styles.historyText}>
                                {operation}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btnText}>
                        HOME
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={() => clearHistory()}>
                    <Text style={styles.btnText}>
                        CLEAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default History;