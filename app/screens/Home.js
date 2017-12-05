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
import { connectAlert } from './../components/Alert';

import { swapCurrency, changeCurrencyAmount, getInitialConversion } from './../actions/currencies';


class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    };
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };
  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  }
  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  }
  handleSettingsPress = () => {
    this.props.navigation.navigate('Options', { title: 'Options' });
  }

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container
        backgroundColor={this.props.primaryColor}
      >
        <StatusBar translucent barStyle="default" />
        <Header
          onPress={this.handleSettingsPress}
        />
        <KeyboardAvoidingView behavior="padding">
          <Logo
            tintColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={quotePrice}
            textColor={this.props.primaryColor}
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
  LastConvertedDate: PropTypes.object,
  primaryColor: PropTypes.string,
  alertWithType: PropTypes.func,
  currencyError: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
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
    primaryColor: state.themes.primaryColor,
    currencyError: state.currencies.error,
  };
};
export default connect(mapStateToProps)(connectAlert(Home));
