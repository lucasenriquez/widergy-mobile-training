import { Alert } from "react-native";
import { createTypes, completeTypes } from "redux-recompose";
import { api } from "../../services/expressionsApi";

const actions = createTypes(completeTypes({
    primaryActions: ['GET_EXPRESSIONS', 'SAVE_EXPRESSION', 'DELETE_EXPRESSION', 'EDIT_EXPRESSION', 'CLEAR_HISTORY'],
  }), '@@HISTORY');

export default actions;

export const privateActionCreators = {
  getExpressionsSuccess: (data) => {
    return { type: actions.GET_EXPRESSIONS_SUCCESS, payload: data }
  },
  getExpressionsFailure: (error) => {
    return { type: actions.GET_EXPRESSIONS_FAILURE, payload: error }
  },
  saveExpressionsSuccess: (data) => {
    return { type: actions.SAVE_EXPRESSION_SUCCESS, payload: data }
  },
  saveExpressionsFailure: (error) => {
    return { type: actions.SAVE_EXPRESSION_FAILURE, payload: error }
  },
  deleteExpressionSuccess: (data) => {
    return { type: actions.DELETE_EXPRESSION_SUCCESS, payload: data }
  },
  deleteExpressionFailure: (error) => {
    return { type: actions.DELETE_EXPRESSION_FAILURE, payload: error }
  },
  editExpressionSuccess: (data) => {
    return { type: actions.EDIT_EXPRESSION_SUCCESS, payload: data }
  },
  editExpressionFailure: (error) => {
    return { type: actions.EDIT_EXPRESSION_FAILURE, payload: error }
  },
  clearHistorySuccess: (data) => {
    return { type: actions.CLEAR_HISTORY_SUCCESS, payload: data }
  },
  clearHistoryFailure: (error) => {
    return { type: actions.CLEAR_HISTORY_FAILURE, payload: error }
  }
};

export const actionCreators = {
  getExpressions: () => async dispatch => {
    dispatch({ type: actions.GET_EXPRESSIONS })
    const response = await api.get('/expressions');
    if (response.ok) {
      dispatch(privateActionCreators.getExpressionsSuccess(response.data));
    } else {
      dispatch(privateActionCreators.getExpressionsFailure(response.error));
    }
  },
  saveExpression: (value) => async dispatch => {
    dispatch({ type: actions.SAVE_EXPRESSION })
    const response = await api.post('/expressions', { value: value });
    if (response.ok) {
      dispatch(privateActionCreators.saveExpressionsSuccess(response.data));
      Alert.alert(response.data.message)
    } else {
      dispatch(
        privateActionCreators.saveExpressionsFailure(response.error));
        Alert.alert(response.error.message)
    }
  },
  deleteExpression: (id) => async dispatch => {
    dispatch({ type: actions.DELETE_EXPRESSION })
    const response = await api.delete(`/expressions/${id}`);
    if (response.ok) {
      dispatch(privateActionCreators.deleteExpressionSuccess(response.data));
      dispatch(actionCreators.getExpressions())
      Alert.alert(response.data.message)

    } else {
      dispatch(privateActionCreators.deleteExpressionFailure(response.error));
      Alert.alert(response.error.message)

    }
  },
  editExpression: (id, value) => async dispatch => {
    dispatch({ type: actions.EDIT_EXPRESSION })
    const response = await api.put(`/expressions/${id}`, { value: value });
    if (response.ok) {
      dispatch(privateActionCreators.editExpressionSuccess(response.data));
      dispatch(actionCreators.getExpressions())
      Alert.alert(response.data.message)
    } else {
      dispatch(privateActionCreators.editExpressionFailure(response.error));
      Alert.alert(response.error.message)
    }
  },
  clearHistory: () => async dispatch => {
    dispatch({ type: actions.CLEAR_HISTORY })
    const response = await api.delete(`/expressions`);
    if (response.ok) {
      dispatch(privateActionCreators.clearHistorySuccess(response.data));
      dispatch(actionCreators.getExpressions())
      Alert.alert(response.data.message)
    } else {
      dispatch(privateActionCreators.clearHistoryFailure(response.error));
      Alert.alert(response.error.message)
    }

  }
};

