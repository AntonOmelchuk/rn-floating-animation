import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import IconContainer from './components/IconContainer';

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

const getRandomColor = () => {
  return `rgb(${getRandomNumber(100, 144)}, ${getRandomNumber(10, 200)}, ${getRandomNumber(200, 244)})`
}

const App = () => {
  const [hearts, setHearts] = useState([])
  const [count, setCount] = useState(0)

  const addHeart = icon => {
    const randomNubmer = getRandomNumber(20, 150)
    setHearts([...hearts, {
      icon,
      id: count,
      right: randomNubmer,
      color: getRandomColor()
    }])
    setCount(count => count + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {hearts && hearts.map(({ id, right, color, icon }) => {
          return (
            <IconContainer key={id} right={right} color={color} icon={icon} />
          )
        })}
      </View>
      <TouchableOpacity onPress={() => addHeart('heart')} style={styles.plusBtn}>
        <AntDesign name='heart' size={24} color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addHeart('like1')} style={[styles.plusBtn, { bottom: 110}]}>
        <AntDesign name='like1' size={24} color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addHeart('star')} style={[styles.plusBtn, { bottom: 190}]}>
        <AntDesign name='star' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#378ad9',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 32,
    left: 32
  },
});

export default App;
