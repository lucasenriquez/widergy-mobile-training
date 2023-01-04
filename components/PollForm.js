import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/forms/actions";
import { styles } from "../screens/HistoryScreen/styles";
import { formStyles } from '../screens/PollsScreen/styles'

const PollForm = ({ navigation }) => {
    const [nameValue, setNameValue] = useState('');
    const [comments, setComments] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [invalidName, setInvalidName] = useState(false);
    const [invalidPhone, setInvalidPhone] = useState(false);
    const [invalidComment, setInvalidComment] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [nameError, setNameError] = useState('');
    const dispatch = useDispatch()
    const inputValues = useSelector(state => state.forms.input_values)
    const savedName = inputValues ? inputValues.name : null
    const [invalidForm, setInvalidForm] = useState(true);

    const changeName = (text) => {
        dispatch(actionCreators.removeComments())
        dispatch(actionCreators.updateName(text))
        validateName(text)
        return setNameValue(text)
    }

    const validateName = (text) => {
        if (/\d/.test(text)) {
            setNameError('The field cannot contain numbers.')
            setInvalidName(true)
            return setInvalidForm(true)
        } else if (String(text).length == 0) {
            setNameError('Required Field.')
            setInvalidName(true)
            return setInvalidForm(true)
        }
        setInvalidName(false)
        setInvalidForm(false)
    }

    const validatePhone = (text) => {
        setPhoneNumber(text)
        if (!(/^\d+$/.test(text))) {
            setInvalidPhone(true)
            setInvalidForm(true)
            return setPhoneError('Please enter a valid phone number.')
        }
        if (String(text).length > 10) {
            setInvalidPhone(true)
            setInvalidForm(invalidPhone)
            return setPhoneError('The field can only contain ten digits.')
        }
        setInvalidPhone(false)
        setInvalidForm(false)
    }

    const validateComments = (text) => {
        setComments(text)
        if (String(text).length < 1) {
            setInvalidForm(true)
            return setInvalidComment(true)
        }
        setInvalidComment(false)
    }

    const handleOnPress = (value) => {
        switch (value) {
            case 'CANCEL':
                dispatch(actionCreators.removeComments())
                return navigation.navigate('Home')
            case 'SEND':
                dispatch(actionCreators.removeComments())
                dispatch(actionCreators.updateName(''))
                return dispatch(actionCreators.saveForm(inputValues))
            default:
        }
    }

    return (
        <SafeAreaView style={formStyles.container}>
            <View style={formStyles.form}>
                <Text>Full Name</Text>
                <View style={formStyles.input}>
                    <TextInput style={formStyles.textInput} value={savedName || nameValue} onChangeText={(text) => changeName(text)} />
                </View>
                {invalidName ? <Text style={formStyles.error}>{nameError}</Text> : null}

                <Text>Comments</Text>
                <View style={formStyles.input}>
                    <TextInput value={comments} onChangeText={(text) => validateComments(text)} />
                </View>
                {invalidComment ? <Text style={formStyles.error}>Required field.</Text> : null}

                <Text>Phone Number</Text>
                <View style={formStyles.input}>
                    <TextInput value={phoneNumber} onChangeText={(text) => validatePhone(text)} />
                </View>
                {invalidPhone ? <Text style={formStyles.error}>{phoneError}</Text> : null}
            </View>
            <View style={styles.buttonsContainer}>
                {['CANCEL', 'SEND'].map(value => {
                    return (
                        <TouchableOpacity disabled={value == 'SEND' && invalidForm} key={value} style={value == 'CANCEL' ? styles.clearButton : styles.homeButton} onPress={() => handleOnPress(value)}>
                            <Text style={styles.btnText}>{value}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default PollForm;
