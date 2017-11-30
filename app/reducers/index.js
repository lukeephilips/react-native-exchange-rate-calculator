import { combineReducers } from 'redux';

import currenciesReducer from './currenciesReducer';
import themesReducer from './themesReducer';

export default combineReducers({
  currenciesReducer, themesReducer
})
