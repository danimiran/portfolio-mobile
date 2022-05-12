import React, { useState } from 'react';
import { Button } from '@rneui/base';
import { SafeAreaView, StyleSheet, TextInput, Text, Image, View, ScrollView } from "react-native";


const CadastraDenuncia = () => {

    const [tipoDenuncia, setTipoDenuncia] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [descricao, setDescricao] = useState("");
    
    const UselessTextInput = (props: any) => {
        return (
          <TextInput
            {...props}
            editable
            maxLength={40}
          />
        );
      }

    return(
    <ScrollView style={styles.container}>
       
        <Text style={{margin: 20, fontSize: 25, textAlign: 'center', marginTop: 80, marginBottom: 30}}> Cadastro Denúncia</Text>

        <TextInput
      style={styles.input}
      onChangeText={setTipoDenuncia}
      value={tipoDenuncia}
      placeholder="tipo Denúncia"
    />
     <TextInput
      style={styles.input}
      onChangeText={setEndereco}
      value={endereco}
      placeholder="Local da Denúncia"
    />
    <TextInput
      style={styles.input}
      onChangeText={setCidade}
      value={cidade}
      placeholder="Digite a cidade"
    />
    <TextInput
      style={styles.input}
      onChangeText={setEstado}
      value={estado}
      placeholder="Digite o estado"
    />
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
      }}>
    <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={setDescricao}
        placeholder="Descrição"
        value={descricao}
        style={{padding: 10}}
      />
      </View>
     <Button buttonStyle={styles.button}>Denunciar</Button>
  </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 55,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#FFFFFF"
      },
      container: {
          flex: 1,
          backgroundColor: "#FFFFFD"
        },
      button: {
        backgroundColor: '#4ac9da',
        margin: 12,
        height: 55,
        borderRadius: 10
      }
  });

export default CadastraDenuncia;