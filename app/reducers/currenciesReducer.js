import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from './../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      let newAmount = {...state, amount: action.amount || 0};
      return newAmount;
    case SWAP_CURRENCY:
      let newCurrencies = {...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      }
      return newCurrencies;
    default:
      return state;
  }
}

export default reducer;
