import React, { Component } from 'react'
import { Animated, StyleSheet, Dimensions, Easing } from 'react-native'
import Icon from './Icon'

const {height} = Dimensions.get('window')
const animationEndY = Math.ceil(height * 0.7)
const negativeEndY = animationEndY * -1

class IconContainer extends Component {
  constructor(props) {
    super(props)
    this.yAnimation = this.state.position.interpolate({
      inputRange: [negativeEndY, 0],
      outputRange: [animationEndY, 0]
    })

    this.opacityAnimation = this.yAnimation.interpolate({
      inputRange: [0, animationEndY],
      outputRange: [1, 0]
    })

    this.scaleAnimtaion = this.yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.4, 1],
      extrapolate: 'clamp'
    })

    this.xAnimation = this.yAnimation.interpolate({
      inputRange: [
        0,
        animationEndY / 6,
        animationEndY / 3,
        animationEndY / 2,
        animationEndY
      ],
      outputRange: [0, 25, 15, 0, 10]
    })

    this.rotateAnimation = this.yAnimation.interpolate({
      inputRange: [
        0,
        animationEndY / 6,
        animationEndY / 3,
        animationEndY / 2,
        animationEndY
      ],
      outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg']
    })
  }

  state = {
    position: new Animated.Value(0),
  }

  componentDidMount() {

    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true
    }).start()
  }

  getHeartStyles() {
    return {
      transform: [
        { translateY: this.state.position },
        { translateX: this.xAnimation },
        { scale: this.scaleAnimtaion },
        { rotate: this.rotateAnimation },
      ],
      opacity: this.opacityAnimation,
    }
  }

  render() {
    const { right, color, icon } = this.props;

    return (
      <Animated.View style={[
        styles.container, this.getHeartStyles(), { right }
      ]}>
        <Icon color={color} icon={icon} />
    </Animated.View>
    )
  }
}

export default IconContainer

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent'
  }
});