import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Heart = ({ color, icon }) => {
  const styles = StyleSheet.create({
    heart: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 50,
      height: 50,
    }
  });

  return (
    <View style={styles.heart}>
      <AntDesign name={icon} size={48} color={color} />
    </View>
  )
}

export default Heart
