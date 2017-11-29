import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    let showListener = 'keyboardDidShow';
    let hideListener = 'keyboardDidHide';
    if (Platform.OS === 'ios') {
      showListener = 'keyboardWillShow';
      hideListener = 'keyboardWillHide';
    }

    this.keyboardDidShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide,
    );
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  render() {
    const containerImageStyle = [
      styles.container,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];
    const imageStyle = [
      styles.image,
      {
        width: this.imageWidth,
        height: this.imageWidth,
      },
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyle]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text
          style={styles.text}
        >Currency Converter
        </Text>
      </View>
    );
  }
}

export default Logo;
