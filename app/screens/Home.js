import React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from './../components/Container';
import { Logo } from './../components/Logo';
import { InputWithButton } from './../components/TextInput';
import { ClearButton } from './../components/Button';
import { LastConverted } from './../components/Text';
import { Header } from './../components/Header';


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '81.02';
const TEMP_CONVERSION_RATE = 0.8102;
const TEMP_CONVERSION_DATE = new Date();


class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log('currency dong');
  };
  handlePressQuoteCurrency = () => {
    console.log('quote dong');
  };
  handleTextChange = (text) => {
    console.log('change text', text);
  }
  handleSwapCurrency = (text) => {
    console.log('press swap currency', text);
  }
  handleSettingsPress = () => {
    console.log('press settings');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent barStyle="default" />
        <Header
          onPress={this.handleSettingsPress}
        />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
