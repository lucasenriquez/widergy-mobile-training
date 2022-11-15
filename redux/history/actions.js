import { createTypes, completeTypes } from "redux-recompose";
const actions = createTypes(completeTypes({
    ignoredActions: ['SAVE_EXPRESSION', 'DELETE_EXPRESSION', 'CLEAR_HISTORY', 'EDIT_EXPRESSION'],
  }), '@@HISTORY');

export default actions;
