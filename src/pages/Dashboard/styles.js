import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const widthWindow =  Dimensions.get('window').width;
const heightWindow =  Dimensions.get('window').height;

const styles =  StyleSheet.create({
  container:{
    flex:1,
  

   },

   imgStyle:{
    flex:1,
   
    alignItems: 'center',
    
    
  },
  imgWelc:{
    
    resizeMode: 'contain',
    width:300,
    marginHorizontal: 10,

  },
  header:{
    height:60,
    backgroundColor: '#050812',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    
    
  },

  txtOla:{
    color: '#5ABFF9',
    fontSize: 20,
    
  },
  txtUser:{
    fontWeight: 'bold',
  },
  


  BoxContent:{
    marginTop:40,
    backgroundColor:'#00000060',
    width: widthWindow - 50,
    marginHorizontal: 30,
    borderRadius: 8,
    borderColor:  '#5ABFF9',
    borderWidth: 1,
    height: 430,
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemInfo:{
    width: 200,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15,
  },
  Info:{
    color: '#fff',
    fontSize: 22,

  },
  InfoValue:{
    fontWeight: 'bold',
  },

  modalView: {
    marginVertical: 98,
    marginHorizontal:20,
    backgroundColor: '#000000',
    borderRadius: 15,
    height: 400,
    alignItems: "center",
    justifyContent: 'space-between',
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  OutModal:{
    
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop:20,
  },

  namPatrono:{
    fontSize: 40,
    textDecorationLine: 'underline',
    color: '#fff',
    fontFamily: 'HarryPotter'
  },

  imgPatrono:{
    resizeMode: 'cover',
    borderRadius:8,
    width:200,
    marginBottom: 30,
  }
})

export default styles;