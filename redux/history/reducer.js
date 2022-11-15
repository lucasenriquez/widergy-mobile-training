import { createReducer, completeReducer } from 'redux-recompose'
import actions from './actions';

let initialState = {
  history: []
}

const reducerDescription = {
  override: {
    [actions.SAVE_EXPRESSION]: (state, action) => {
      return {...state, history:  state.history.concat([{ id: action.id, value: action.value }])}
    },
    [actions.DELETE_EXPRESSION]: (state, action) => {
      return {...state, history: state.history.filter((expression) => expression.id !== action.id)}
    },
    [actions.CLEAR_HISTORY]: (state, action) => {
      return {...state, history: []}
    },
    [actions.EDIT_EXPRESSION]: (state, action) => {
      let newHistory = state.history.filter((expression) => expression.id !== action.id)
      return {...state, history: newHistory.concat([{ id: action.id, value: action.value }])
    }
    }
  }
}

export default createReducer(initialState, completeReducer(reducerDescription));
