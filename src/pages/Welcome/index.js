import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { useNavigation} from '@react-navigation/native';

import styles from './styles';
const imgBKG = require('../../assets/WelcomeBack.jpg');
const imgWelcome = require('../../assets/welcome.png');

function Welcome(){
  const [count, setCount] = useState(5)


  useEffect(() => {
  let timer = {count: 5};
   let start = setInterval(function (timer) {
    if  (timer.count == 0) {
      clearInterval(start);
      navigation.navigate('Dashboard')
    }
  
    timer.count--;
    setCount(timer.count)
  }, 1000, timer);
  }, [])



 

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <ImageBackground 
     source={imgBKG}
     style={styles.imgStyle}>
        <Image source={imgWelcome} style={styles.imgWelc} />
        <View style={styles.BoxTexts}>
          <Text style={styles.Text1}>Redirecionando em ...</Text>
          <Text style={styles.Text2}>{count}</Text>
        </View>
     </ImageBackground>
    </View>
  )  
    
}

export default Welcome;