import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import currencies from '../data/currencies';
import { ListItem, Separator } from './../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from './../actions/currencies';

class CurrencyList extends Component {
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };

  render() {
    let currentCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      currentCurrency = this.props.quoteCurrency;
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
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string,

};

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  currentCurrency: state.currencies.currentCurrency,
  primaryColor: state.themes.primaryColor,

});

export default connect(mapStateToProps)(CurrencyList);
