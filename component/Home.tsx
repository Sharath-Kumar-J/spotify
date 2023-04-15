
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

const HomeScreen=({ navigation }) => {
  return(
    <View  style= {styles.container}>
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {navigation.navigate( " Spotify");}
      }>
      <Text style ={styles.button }>
        "Spotify"
      </Text>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {navigation.navigate( " Whatsappscreen ");}
      }>
      <Text style ={styles.whatsapp }>
        "Whatsapp"
      </Text>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {navigation.navigate( " Counterscreen ");}
      }>
      <Text style ={styles.counter }>
        "Counter"
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {navigation.navigate(" Assesshomescreen ");}
      }>
      <Text style ={styles.counter }>
        "Assessment"
      </Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
  button :{
    fontSize:25,
    color : 'black',
    borderWidth:2,
    margin : 20,
    textAlign:'center',
    justifyContent:'center',
    borderRadius:10,
 
  },
  whatsapp:{
    fontSize:25,
    color : 'black',
    borderWidth:2,
    margin : 20,
    textAlign:'center',
    justifyContent:'center',
    borderRadius:10,

  },
  counter:{
    fontSize:25,
    color : 'black',
    borderWidth:2,
    margin : 20,
    textAlign:'center',
    justifyContent:'center',
    borderRadius:10,

  },

});

export default HomeScreen;