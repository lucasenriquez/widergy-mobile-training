import { Alert } from "react-native";
import { createTypes, completeTypes } from "redux-recompose";
import { api } from "../../services/expressionsApi";

const actions = createTypes(completeTypes({
    primaryActions: ['SAVE_FORM'],
    ignoredActions: ['REMOVE_COMMENTS', 'UPDATE_NAME', 'SET_INVALID_FORM']
}), '@@FORMS');

export default actions;

export const privateActionCreators = {
    saveFormSuccess: (data) => {
        return { type: actions.SAVE_FORM_SUCCESS, payload: data }
    },
    saveFormFailure: (data) => {
        return { type: actions.SAVE_FORM_FAILURE, payload: data }
    },
    removeComments: () => {
        return { type: actions.REMOVE_COMMENTS}
    },
    updateName: (name) => {
        return { type: actions.UPDATE_NAME, name: name}
    },
    setInvalidForm: (value) => {
        return { type: actions.UPDATE_NAME, value: value}
    }
}

export const actionCreators = {
    saveForm: (input_values) => async dispatch => {
        dispatch({ type: actions.SAVE_FORM })
        const response = await api.post('/form_responses', { input_values: input_values });
        if (response.ok) {
            dispatch(privateActionCreators.saveFormSuccess(response.data));
            Alert.alert(response.data.message)
        } else {
            dispatch(privateActionCreators.saveFormFailure(response.error));
            Alert.alert(response.error.message)
        }
    },
    removeComments: () => dispatch => {
        dispatch(privateActionCreators.removeComments())
    },
    updateName: (name) => dispatch => {
        dispatch(privateActionCreators.updateName(name))
    },
    setInvalidForm: (value) => dispatch => {
        dispatch(privateActionCreators.setInvalidForm(value))
    }
}
