import React, { useState } from 'react';
import { Button } from '@rneui/base';
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";


const AlteraSenha = () => {

    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    return(
    <SafeAreaView style={styles.container}>
     
        <Text> Alterar Senha</Text>
    <TextInput
      style={styles.input}
      onChangeText={setConfSenha}
      value={confSenha}
      placeholder="Digite sua Senha"
    />
    <TextInput
      style={styles.input}
      onChangeText={setSenha}
      value={senha}
      placeholder="Confirmação de semha"
    />
     <Button buttonStyle={styles.button}>Modificar</Button>
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
  
export default AlteraSenha;