import React from "react";
import { Alert, View, TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/HistoryScreen/styles";
import { actionCreators } from "../redux/history/actions";
import { useDispatch } from "react-redux";

const TabBar = ({ navigation }) => {
    const dispatch = useDispatch();
    const showAlert = () => {
        Alert.alert('Clear History', 'Are you sure?',
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => { clearHistory() },
                    style: "submit",
                },
            ],
            {
                cancelable: true
            }
        );
    }

    const clearHistory = () => {
        dispatch(actionCreators.clearHistory())
    }
    
    return (
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
    )
};

export default TabBar;
