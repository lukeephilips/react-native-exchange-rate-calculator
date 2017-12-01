import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import currencies from '../data/currencies';
import { ListItem, Separator } from './../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from './../actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency:PropTypes.string,
    quoteCurrency:PropTypes.string,

  }
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type == 'base') {
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type == 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency))
    }
    this.props.navigation.goBack(null);
  };

  render() {
    let currentCurrency = state.currencies.baseCurrency;
    if (this.props.navigation.state.params == 'quote') {
      currentCurrency = state.currencies.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  currentCurrency: state.currencies.currentCurrency,
});

export default connect(mapStateToProps)(CurrencyList);
