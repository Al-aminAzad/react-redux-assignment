import { NAME_CHANGE } from './nameTypes';

const initialState = {
  name: '',
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGE:
      return {
        ...state,
        name: action.text,
      };
    default:
      return state;
  }
};

export default nameReducer;
