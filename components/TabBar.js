import React from "react";
import { Alert, View, TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/HistoryScreen/styles";
import { actionCreators } from "../redux/forms/actions";
import { useDispatch, useSelector } from "react-redux";

const TabBar = ({ navigation, values }) => {
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
    const handleOnPress = (value) => {
        switch (value) {
            case 'CLEAR':
                return showAlert();
            case 'HISTORY':
                return navigation.navigate('History')
            case 'HOME':
                return navigation.navigate('Home')
            case 'POLL':
                return navigation.navigate('Poll')
                break;
        }
    }

    const clearHistory = () => {
        dispatch(actionCreators.clearHistory())
    }

    return (
        <View style={styles.buttonsContainer}>
            {values.map(value => {
                return (
                    <TouchableOpacity key={value} style={value == 'CLEAR' ? styles.clearButton : styles.homeButton} onPress={() => handleOnPress(value)}>
                        <Text style={styles.btnText}>{value}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
};

export default TabBar;
