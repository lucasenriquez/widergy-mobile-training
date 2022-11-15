import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const HistoryScreen = ({ navigation }) => {
    const [editedExpresion, setEditedExpression] = useState('');
    const [onEdit, setOnEdit] = useState(false);
    const [input, setInput] = useState('');
    const [editingId, setEditingId] = useState(''); 
    const dispatch = useDispatch();
    const historyArray = useSelector(state => state.history);

    const clearHistory = () => {
        return dispatch({ type: '@@HISTORY/CLEAR_HISTORY' })
    }

    const deleteExpression = (id) => {
        return dispatch({ type: '@@HISTORY/DELETE_EXPRESSION', id: id })
    }

    const showAlert = (type, id = null) => {
        const onDelete = type == 'DELETE'
        const title = onDelete ? 'Delete Expression' : 'Clear History'
        Alert.alert(title, 'Are you sure?',
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => { onDelete ? deleteExpression(id) : clearHistory() },
                    style: "submit",
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { },
            }
        );
    }

    return (
        <View style={styles.historyContainer}>
            <ScrollView scrollEnabled={true}>
                {historyArray.map((operation) => {
                    return (
                        <View key={operation.id} style={styles.history}>
                            <TextInput key={operation.id} style={styles.historyText} onChangeText={newExpression => { 
                                setOnEdit(true)
                                setInput(newExpression)
                                setEditingId(operation.id)
                                setEditedExpression(newExpression) 
                            }}
                            onSubmitEditing={() => {
                                setOnEdit(false)
                                setEditingId('')
                                return dispatch({ type: '@@HISTORY/EDIT_EXPRESSION', id: operation.id, value: editedExpresion })
                            }}
                            value={onEdit && operation.id == editingId ? input : operation.value}/>
                            <View style={styles.options}>
                                <TouchableOpacity onPress={() => showAlert('DELETE', operation.id)}>
                                    <Text style={styles.optionsText}>DELETE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btnText}>
                        HOME
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={() => showAlert('CLEAR')}>
                    <Text style={styles.btnText}>
                        CLEAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HistoryScreen;
