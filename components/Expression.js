import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../screens/HistoryScreen/styles";
import { Alert, View, TextInput, TouchableOpacity, Text } from "react-native";
import { actionCreators } from "../redux/history/actions";

const Expression = ({ id }) => {
    const [editedExpresion, setEditedExpression] = useState('');
    const [onEdit, setOnEdit] = useState(false);
    const [input, setInput] = useState('');
    const [editingId, setEditingId] = useState(''); 
    const dispatch = useDispatch();
    const historyArray = useSelector(state => state.history);
    const operation = historyArray.filter(operation => operation.id === id)[0]

    const deleteExpression = (id) => {
        dispatch(actionCreators.deleteExpression(id))
    }

    const showAlert = (id) => {
        Alert.alert('Delete Expression', 'Are you sure?',
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => { deleteExpression(id) },
                    style: "submit",
                },
            ],
            {
                cancelable: true
            }
        );
    }

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
                    dispatch(actionCreators.editExpression(operation.id, editedExpresion))
                }}
                value={onEdit && operation.id == editingId ? input : operation.value} />
            <View style={styles.options}>
                <TouchableOpacity onPress={() => showAlert(operation.id)}>
                    <Text style={styles.optionsText}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Expression;
