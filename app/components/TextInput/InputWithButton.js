import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {
  const {
    onPress, buttonText, editable = true, textColor,
  } = props;
  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBgBase).darken(styles.$buttonBgModifier);

  const buttonTextStyles = [styles.buttonText];

  if (textColor) {
    buttonTextStyles.push({
      color: textColor,
    });
  }
  return (
    <View
      style={containerStyles}
    >
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text
          style={buttonTextStyles}
        >
          {buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        {...props}
      />
    </View>
  );
};
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;
