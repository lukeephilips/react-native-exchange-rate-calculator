import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from './../components/Container';
import { Logo } from './../components/Logo';
import { InputWithButton } from './../components/TextInput';
import { ClearButton } from './../components/Button';
import { LastConverted } from './../components/Text';
import { Header } from './../components/Header';
import { swapCurrency, changeCurrencyAmount } from './../actions/currencies';


class Home extends React.Component {
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };
  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  }
  handleSwapCurrency = (text) => {
    this.props.dispatch(swapCurrency());
  }
  handleSettingsPress = () => {
    this.props.navigation.navigate('Options', { title: 'Options' });
  }

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = '...'
    }

    return (
      <Container>
        <StatusBar translucent barStyle="default" />
        <Header
          onPress={this.handleSettingsPress}
        />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={quotePrice}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.LastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  isFetching: PropTypes.bool,
  LastConvertedDate: PropTypes.object
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const conversionRate = rates[quoteCurrency] || 0;
  
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate,
    isFetching: conversionSelector.isFetching,
    LastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
  };
};
export default connect(mapStateToProps)(Home);
