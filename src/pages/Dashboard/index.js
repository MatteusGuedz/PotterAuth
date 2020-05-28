import React, {useState} from 'react';
import { 
  View,
  ImageBackground,
  Text,
  Modal,
  Image,
  TouchableOpacity

} from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import  { FontAwesome, Ionicons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import styles from './styles';
const imgBKG = require('../../assets/back2.jpg');
const imgPatrono = require('../../assets/Patrono.jpeg');

function Dashboard(){

  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('Bem vindo');
  let [fontsLoaded] = useFonts({
    'HarryPotter': require('../../assets/fonts/HarryPotter.ttf'),
  });
  

  function logout(){
    navigation.navigate('SignUp')
   
}

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.txtOla}>Olá, 
  <Text style={styles.txtUser}> { username }</Text> </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <FontAwesome 
        name="power-off" 
        size={30} 
        onPress={logout}
        color="#5ABFF9"/>
        </TouchableOpacity>
      </View>

     <ImageBackground 
     blurRadius={  2}
     source={imgBKG}
     style={styles.imgStyle}>
     
  <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible)}}> 
        
        
    <View style={styles.modalView}>
       
  
  <Ionicons
      style={styles.OutModal}
      name="md-close-circle-outline" 
      size={28} color="#f00" 
      onPress={() => { setModalVisible(!modalVisible)}}
      
      />
     
        
          <Text style={styles.namPatrono}>Cervo</Text>
          <Image source={imgPatrono} style={styles.imgPatrono} />
          
    </View>

        </Modal>

        <View style={styles.BoxContent}  >
            <View style={styles.itemInfo}> 
              <Text style={styles.Info}> Casa =  
              <Text style={styles.InfoValue}> valor</Text> </Text>
            </View>
            
            <View style={styles.itemInfo}> 
              <Text style={styles.Info}> Nome =  
              <Text style={styles.InfoValue}> valor</Text> </Text>
            </View>

            <View style={styles.itemInfo}> 
              <Text style={styles.Info}> Dia =  
              <Text style={styles.InfoValue}> valor</Text> </Text>
            </View>
            
            
            
            <View style={styles.itemInfo}> 
              <Text style={styles.Info}> Hora =  
              <Text style={styles.InfoValue}> valor</Text> </Text>
            </View>
            <View style={styles.itemInfo}> 
              <Text style={styles.Info}> Local =  
              <Text style={styles.InfoValue}> valor</Text> </Text>
            </View>
            <TouchableOpacity 
            style={styles.itemInfo}
            onPress={() => {
              setModalVisible(true);
            }}
            > 
              <Text style={styles.Info}>  
              <Text style={styles.InfoValue}> Clique Aqui!</Text> </Text>
            </TouchableOpacity>
        </View>
      
     </ImageBackground>
    </View>
  )  
    
}
}

export default Dashboard;