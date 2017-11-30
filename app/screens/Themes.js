import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from './../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleThemePress = (color) => {
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          onPress={() => this.handleThemePress(styles.$blue)}
          text="Blue"
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          onPress={() => this.handleThemePress(styles.$orange)}
          text="Orange"
          selected
          checkmark={false}
          iconBackground={styles.$orange}

        />
        <Separator />
        <ListItem
          onPress={() => this.handleThemePress(styles.$green)}
          text="Green"
          selected
          checkmark={false}
          iconBackground={styles.$green}

        />

        <Separator />
        <ListItem
          onPress={() => this.handleThemePress(styles.$purple)}
          text="Purple"
          selected
          checkmark={false}
          iconBackground={styles.$purple}

        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
