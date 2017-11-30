import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import { View, Image } from 'react-native';

const Icon = ({ checkmark, visible }) => {
  const iconStyle = [styles.icon];
  if (visible) {
    iconStyle.push(styles.iconVisible);
  }
  return (
    <View style={iconStyle}>
      {checkmark ? <Image
        resizeMode="contain"
        style={styles.checkmark}
        source={require('./images/check.png')} /> : null}

    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
}
export default Icon;
