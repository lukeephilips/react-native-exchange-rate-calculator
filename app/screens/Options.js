import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from './../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : "md";
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress = () => {
    this.props.navigation.navigate('Themes', {title: 'Themes'});
  }
  handleSitesPress = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitesPress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
      </ScrollView>
    )
  }
}

export default Options;
