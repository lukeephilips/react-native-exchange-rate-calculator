import React from 'react';
import { View, StatusBar } from 'react-native';

import {Container} from './../components/Container';
import {Logo} from './../components/Logo';
import {InputWithButton} from './../components/TextInput';
import {ClearButton} from './../components/Button';


const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "81.02";

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

  render() {
    return(
      <Container>
        <StatusBar backgroundColor="red" translucent={true} barStyle="default"/>
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
         <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    )
  }
};

export default Home;
