import React, {useState} from 'react';
import { useNavigation} from '@react-navigation/native';
import  styles from  './styles';
import {FontAwesome5, Feather, Entypo} from '@expo/vector-icons';
import api from '../../services/api';
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity, 
  Text
 } from 'react-native';

const imgBKG = require('../../assets/bkg.jpg');
const logoTOP = require('../../assets/logoTop.png');
const logoBOT = require('../../assets/logoBOTT.png');



function SignIn(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [house, setHouse] = useState('');
  const [password, setPassword] = useState('');
  //48:10
  function handleSubmit(){
    navigation.navigate('SignUp');
  }
  
  const navigation = useNavigation();


  return (
  <View style={styles.container}>
    <ImageBackground source={imgBKG} style={styles.imgStyle}>
      <Image  source={logoTOP}  style={styles.logoTop}/>


<View style={styles.containerSign}>
      
  
     <View>
     <View style={styles.BoxInput}>
      <FontAwesome5 name="user" size={20}  color="#BEB9B9"/> 
          <TextInput
            style={styles.Input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username" />
     </View>  

     <View style={styles.BoxInput}>
      <Entypo name="email" size={20}  color="#BEB9B9"/> 
          <TextInput
            style={styles.Input}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholder="e-mail" />
     </View>  
     <View style={styles.BoxInput}>
      <FontAwesome5 name="house-damage" size={20}  color="#BEB9B9"/> 
          <TextInput
            style={styles.Input}
            value={house}
            onChangeText={setHouse}
            placeholder="House" />
     </View>  

      <View style={styles.BoxInput}>
      <Feather name="key" size={20}  color="#BEB9B9"/> 
          <TextInput
            style={styles.Input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password" />
      </View> 
      <View style={styles.BoxInput}>
      <Feather name="key" size={20}  color="#BEB9B9"/> 
          <TextInput
            style={styles.Input}
            placeholder="Confirm Password" />
      </View> 
     </View>

    <View style={styles.BoxButton}>
          <TouchableOpacity style={styles.btnSign} onPress={() => handleSubmit()}>
              <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
      <Text style={styles.ForgouText}> I already have an <Text style={styles.ForgouTextBlue} onPress={() =>  navigation.navigate('SignUp')} >Account</Text></Text>
     </View>
  
  
      
 </View>

     </ImageBackground>
      
   
    </View>   
  )

  
}

export default SignIn;