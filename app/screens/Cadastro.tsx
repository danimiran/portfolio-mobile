import React, { useState } from 'react';
import { Button } from '@rneui/base';
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";


const CadastroUsuario = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [confSenha, setConfSenha] = useState("");
    
    return(
    <SafeAreaView style={styles.container}>
    

      <TextInput
      style={styles.input}
      onChangeText={setNome}
      value={nome}
      placeholder="Digite seu nome"
    />
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
    <TextInput
      style={styles.input}
      onChangeText={setConfSenha}
      value={confSenha}
      placeholder="Confirmação de senha"
    />
     <Button buttonStyle={styles.button}>Cadastrar</Button>
  </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 55,
      borderRadius: 10,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#FFFFFF'
      },
    button: {
      backgroundColor: '#4ac9da',
      margin: 12,
      height: 55,
      borderRadius: 10
    }
  });
  


export default CadastroUsuario;