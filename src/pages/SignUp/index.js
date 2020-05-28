import React, {useState, useEffect} from 'react';
import { useNavigation} from '@react-navigation/native';
import  styles from  './styles';
import {FontAwesome5, Feather, Ionicons} from '@expo/vector-icons';

import {
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity, 
  Text,
 } from 'react-native';

 const imgBKG = require('../../assets/bkg.jpg');
 const logoTOP = require('../../assets/logoTop.png');




function SignUp(){
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')



 async function handleLogin(){
  navigation.navigate('Welcome')


}

  function handleToggleVisibility(){
    setIsVisible((prevState) => !prevState);
}

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
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholder="Email" />
     </View>  

      <View style={styles.BoxInput}>
      <Feather name="key" size={20}  color="#BEB9B9"/> 
          <TextInput
        style={styles.Input}
        placeholder="Password" 
        onChangeText={setPass}
        value={password}
        autoCapitalize="none"
        secureTextEntry={ isVisible ? false :true }
        autoCorrect={false}
        placeholderTextColor="#BEB9B9"
            
            />

         <TouchableOpacity onPress={handleToggleVisibility}>   
         <Ionicons name={isVisible ? "ios-eye" : "ios-eye-off"} size={24} color="#BEB9B9" /> 
         </TouchableOpacity>  
      </View> 
     </View>

    <View style={styles.BoxButton}>
          <TouchableOpacity style={styles.btnSign}>
              <Text 
              style={styles.btnText}
              onPress={() => handleLogin()}
              >Sign Up</Text>

          </TouchableOpacity>
          <Text style={styles.ForgouText}> Forgot your Password?</Text>
         <Text 
           style={styles.ForgouText}
           onPress={() => navigation.navigate('SignIn')} 
          > I don't have an account</Text>
     </View>
  
  
      
 </View>

     </ImageBackground>
      
   
    </View>   
  )

  
}

export default SignUp;