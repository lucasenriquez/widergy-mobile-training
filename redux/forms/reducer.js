import { createReducer, completeReducer } from 'redux-recompose'
import actions from './actions';

const initialState = {
    input_values: {},
    invalid_form: true
}

const reducerDescription = {
    primaryActions: [
        actions.SAVE_FORM
    ],
    override: {
        [actions.SAVE_FORM]: (state, _action) => {
            return { ...state, loading: true }
        },
        [actions.SAVE_FORM_SUCCESS]: (state, _action) => {
            return { ...state, loading: false }
        },
        [actions.SAVE_FORM_FAILURE]: (state, _action) => {
            return { ...state, loading: false }
        },
        [actions.REMOVE_COMMENTS]: (state, _action) => {
            return { ...state, input_values: { name: state.input_values.name } }
        },
        [actions.UPDATE_NAME]: (state, action) => {
            return { ...state, input_values: { name: action.name } }
        },
        [actions.SET_INVALID_FORM]: (state, action) => {
            return { ...state, invalid_form: action.value }
        }
    }
}

export default createReducer(initialState, completeReducer(reducerDescription));
