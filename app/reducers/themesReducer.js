import { CHANGE_THEME } from './../actions/themes';

const initialState = {
  themes: {
    primaryColor: '$blue',
  },
};

const themesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};

export default themesReducer;
