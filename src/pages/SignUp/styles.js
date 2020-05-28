import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


const styles =  StyleSheet.create({
  container:{
     flex:1,

   
  },

  imgStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
 
  
  },

  logoTop:{
    resizeMode: 'contain',
    height:70,
 

  }, 

  

  containerSign:{
    backgroundColor: '#00000095',
    borderRadius:30,
    width:  310,
    height: 340,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },




  BoxInput:{
    flexDirection: 'row',
    marginHorizontal: 15,
    borderBottomColor: '#BEB9B9',
    borderBottomWidth: 2,
    alignItems: 'center',
    marginBottom: 10,
    paddingRight:10,
  },
  
  Input:{
    
    height: 40,
    marginLeft: 10,
    width:180,
    color: '#fff',
    fontSize: 16
  }, 

  btnSign:{
    width:150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
    backgroundColor: '#3E599A',
    marginBottom: 15,
  },
  btnText:{
    color: '#fff',
    fontSize: 20
  },
  ForgouText:{
    color: '#fff',
    fontSize: 15,
    marginBottom:10,
    textDecorationLine: 'underline'
    
  }
})


export default styles;