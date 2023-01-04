import { createReducer, completeReducer } from 'redux-recompose'
import actions from './actions';

let initialState = {
  history: [],
  loadingHistory: false,
  historyError: false
}

const reducerDescription = {
  primaryActions: [
    actions.GET_EXPRESSIONS,
    actions.SAVE_EXPRESSION,
    actions.DELETE_EXPRESSION,
    actions.CLEAR_HISTORY,
    actions.EDIT_EXPRESSION
  ],
  override: {
    [actions.SAVE_EXPRESSION]: (state, action) => {
      return {...state, loading: true }
    },
    [actions.SAVE_EXPRESSION_SUCCESS]: (state, action) => {
      return {...state, loading: false }
    },
    [actions.SAVE_EXPRESSION_FAILURE]: (state, action) => {
      return {...state, loading: false }
    },
    [actions.DELETE_EXPRESSION]: (state, action) => {
      return {...state, loading: true}
    },
    [actions.DELETE_EXPRESSION_SUCCESS]: (state, action) => {
      return {...state, loading: false}
    },
    [actions.DELETE_EXPRESSION_FAILURE]: (state, action) => {
      return {...state, loading: false}
    },
    [actions.EDIT_EXPRESSION]: (state, _action) => {
      return {...state, loading: true}
    },
    [actions.EDIT_EXPRESSION_SUCCESS]: (state, action) => {
      return {...state, loading: false}
    },
    [actions.EDIT_EXPRESSION_FAILURE]: (state, action) => {
      return {...state, loading: false}
    },
    [actions.GET_EXPRESSIONS]: (state, _action) => {
      return {...state, loading: true}
    },
    [actions.GET_EXPRESSIONS_SUCCESS]: (state, action) => {
      return {
        ...state,
        history: action.payload,
        loading: false
      }
    },
    [actions.GET_EXPRESSIONS_FAILURE]: (state, action) => {
      return {
        ...state, loading: false
      }
    },
    [actions.CLEAR_HISTORY]: (state, action) => {
      return {
        ...state, loading: true
      }
    },
    [actions.CLEAR_HISTORY_SUCCESS]: (state, action) => {
      return {
        ...state, loading: false
      }
    },
    [actions.CLEAR_HISTORY_FAILURE]: (state, action) => {
      return {
        ...state, loading: false
      }
    }
  }
}

export default createReducer(initialState, completeReducer(reducerDescription));
