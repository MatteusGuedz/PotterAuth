import React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
  container:{
    flex:1,
   },

   imgStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imgWelc:{
   
    resizeMode: 'contain',
    height: 150,
    width:280,
    marginHorizontal: 10,
  },
  

  BoxTexts:{
    alignItems: 'center',
    justifyContent: 'center'
  },

  Text1:{
    fontSize: 20,
    color: '#ddd'
  },
  Text2:{
    fontSize: 25,
    color: '#ddd',
    fontWeight: 'bold',
  }
  
})

export default styles;