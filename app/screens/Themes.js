import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from './../components/List';
import { changeTheme } from './../actions/themes';


const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  handleThemePress = (color) => {
    this.props.dispatch(changeTheme(color));
    this.props.navigation.navigate('Home');
  }
  render() {
    let selectedColor = styles.$blue;
    if (this.props.primaryColor) {
      selectedColor = this.props.primaryColor;
    }

    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          onPress={() => this.handleThemePress(styles.$blue)}
          text="Blue"
          selected
          checkmark={selectedColor === styles.$blue}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          onPress={() => this.handleThemePress(styles.$orange)}
          text="Orange"
          selected
          checkmark={selectedColor === styles.$orange}
          iconBackground={styles.$orange}

        />
        <Separator />
        <ListItem
          onPress={() => this.handleThemePress(styles.$green)}
          text="Green"
          selected
          checkmark={selectedColor === styles.$green}
          iconBackground={styles.$green}

        />
        <Separator />
        <ListItem
          onPress={() => this.handleThemePress(styles.$purple)}
          text="Purple"
          selected
          checkmark={selectedColor === styles.$purple}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

Themes.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  primaryColor: PropTypes.string,
};

const mapStateToProps = state => ({
  primaryColor: state.themes.primaryColor,
});

export default connect(mapStateToProps)(Themes);
