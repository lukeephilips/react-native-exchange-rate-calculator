import { combineReducers } from 'redux';

import currencies from './currenciesReducer';
import themes from './themesReducer';

export default combineReducers({
  currencies, themes,
});
