import { combineReducers } from 'redux';

import currencies from './currenciesReducer';
import themes from './themesReducer';
import nav from './nav';

export default combineReducers({
  currencies,
  themes,
  nav,
});
