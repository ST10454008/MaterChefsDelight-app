import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';


const logo = require('../assets/logo.png'); 

const Home = ({navigation}) => {
  return (
    <View>
      <SafeAreaView style={styles.Safeareaviw}/>

    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.navbar}>
        <TouchableOpacity style={styles.ChefsButton} onPress={()=> navigation.navigate('Login')}> 
          <Image source={require('../assets/Chef.png')}style={styles.Chef}/>
        </TouchableOpacity>
       

        </View>
        
  
      <Image 
        source={logo} 
        style={styles.logo} 
      />
      
      
      <Text style={styles.description}>
        Welcome to Master Chef's Delight, where culinary excellence meets luxury dining. Our restaurant is designed to provide an unforgettable experience, blending exquisite flavors with elegant ambiance. 
        At Master Chef's Delight, we believe that every meal is a masterpiece, crafted with the finest ingredients and presented with meticulous attention to detail. 
        Whether you're here for a gourmet dinner, a relaxing lunch, or a special celebration, our sophisticated setting and impeccable service ensure that each visit is a unique and luxurious journey for your senses. 
        Come indulge in the art of fine dining where every bite is a testament to refined taste and elegance.
      </Text>
      
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate('Menuforpp')}> 
          <Text style={styles.backButtonTxt}> 
            Menu
          </Text>
        </TouchableOpacity>
      
    </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'peachpuff',  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  Safeareaviw: {
    paddingTop: 40,
    backgroundColor: 'peachpuff'
  },

  logo: {
    width: 400,  
    height: 300, 
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,  
    marginVertical: 20,
    fontWeight:"900",
  },
  button: {
    padding: 20,
    backgroundColor:'blue',
    width: 300,
    alignItems: "flex-start",
    borderRadius: 10,
  },
  buttonTxt: {
    color: 'white',
    
  }, 
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: 'blue',
    width: 100,
    margin: 20,
    alignItems: 'center',
    borderRadius: 10,

  },
  backButtonTxt:{
    color: 'white'
  },

  navbar: {
    flexDirection: 'row',
  },
  ChefsButton: {
    justifyContent: 'flex-start',
  }
});

