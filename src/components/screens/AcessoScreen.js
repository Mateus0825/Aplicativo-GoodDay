import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function AcessoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtilte}>Faça seu Login!</Text>

      <View>
        <TextInput style={[styles.type, {marginTop: -220}]} placeholder='Email'></TextInput>
         <TextInput style={styles.type} placeholder='Senha' secureTextEntry></TextInput>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: -70}}>
        <TouchableOpacity style = {[styles.Button, { marginRight: 10}]}>
            <Text style = {styles.TextButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.Button}>
            <Text style = {styles.TextButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

 {/* Imagens */}
    <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 250, width: '100%' }} >
        <Image
    source={require('../assets/Google.png')} 
    style={[styles.image, { marginRight: 32 }]}
    />
          <Image
    source={require('../assets/Facebook.png')} 
    style={styles.image}
    />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdf9ed',
  },
  title: {
  position: 'absolute',
    top: 120,
    left: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#302d2dff',
    marginBottom: 5,
  },
  subtilte: {
    position: 'absolute',
    top: 160, 
    left: 25,
    color: '#302d2dff',
    fontSize: 15,
  },
  type:{
    width: 340,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '302d2dff',
    backgroundColor: '#f8edc6',
    marginBottom: 16, 
  },
  Button: {
    width: 150,
    height: 50,
    backgroundColor: '#62531e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#302d2dff',
    marginBottom: 10,
  },
  TextButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        
    },
});
