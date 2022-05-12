import React, { useState } from 'react';
import { Button } from '@rneui/base';
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";


const Login = ({navigation}: {navigation: any}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
    <SafeAreaView style={styles.container}>
       <Image
        style={styles.img}
        source={require('../assets/Logo.png')} width={50}
      />
        <Text style={{textAlign: 'center', marginBottom: 10}}> Faça login para continuar</Text>
    <TextInput
      style={styles.input}
      onChangeText={setEmail}
      value={email}
      placeholder="Digite seu email"
    />
    <TextInput
      style={styles.input}
      onChangeText={setSenha}
      value={senha}
      placeholder="Digite sua senha"
    />
     <Button buttonStyle={styles.button} onPress={() => {navigation.navigate("Home")}}>Entrar</Button>
    <Text style={{marginLeft: 16}}>Não tem cadastro? <Text style={{fontWeight: 'bold', color: '#4ac9da'}} onPress={() => {navigation.navigate("CadastraUsuario")}}>Cadastre-se</Text></Text>
  </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 55,
      borderRadius: 10,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    container: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    img: {
        marginLeft: 50
    },
    button: {
        backgroundColor: '#4ac9da',
        margin: 12,
        height: 55,
        borderRadius: 10
    }
  });
  


export default Login;