import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Themes from './screens/Themes';



EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',
  $primaryOrange: '#d57a66',
  $white: 'white',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGrey: '#f0f0f0',
  $darkText: '#343434',
});

export default () => <Themes />;
