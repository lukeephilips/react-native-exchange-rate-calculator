import React from 'react';
import { View, StatusBar } from 'react-native';

import {Container} from './../components/Container';
import {Logo} from './../components/Logo';
import {InputWithButton} from './../components/TextInput';
import {ClearButton} from './../components/Button';
import {LastConverted} from './../components/Text';
import {Header} from './../components/Header';




const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "81.02";
const TEMP_CONVERSION_RATE = .8102;
const TEMP_CONVERSION_DATE = new Date();


class Home extends React.Component {
  handlePressBaseCurrency = () => {
    alert("ding dong");
  };
  handlePressQuoteCurrency = () => {
    console.log("quote dong");
  };
  handleTextChange = (text) => {
    console.log('change text', text);
  }
  handleSwapCurrency = (text) => {
    console.log('press swap currency');
  }
  handleSettingsPress = (text) => {
    console.log('press settings');
  }

  render() {
    return(
      <Container>
        <StatusBar backgroundColor="red" translucent={true} barStyle="default"/>
        <Header
          onPress={this.handleSettingsPress}
        />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
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
      </Container>
    )
  }
};

export default Home;
