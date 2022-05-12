import { Dialog } from '@rneui/themed';
import React, { useState } from 'react';
import {Button, Icon, ListItem } from '@rneui/base';
import { View, Text } from 'react-native';


const Denuncias = () => {

    const [modal, setModal] = useState(false);

    const abreModal = () => {
        setModal(!modal);
      };

    const list = [
        {
            foto: "https://cdn1.iconfinder.com/data/icons/avatar-girl-2/129/4-512.png",
            nome: "Daniela Miranda",
            status: "Solucionado",
            descricao: "A Rua sem recolhimento de lixo, com isso está tendo acumulo nas casas do bairro e causando mau cheiro.",
            localizacao: "Guarulhos -SP",
            curtidas: 3,
            comentarios : [{
              nome: "Maria Souza",
              descricao: 'Que bom que foi resolvido!'
            }],
            solucionado: true,
            descricaoSolucao: "Foram ajustadas as rotas do recolhimento de lixo no bairro",
            solucionador: "Gestor de Serviços Publicos",
            tipoDenuncia: "Serviços Publicos"
        }
      ]
    return (
        <View>
            <Text style={{margin: 20, fontSize: 25, textAlign: 'center', marginTop: 80, marginBottom: 30}}> Minhas Denúncias </Text>
           
        {
            list.map((item, i) => (
                <View>
            <ListItem key={i} bottomDivider  onPress={abreModal}>
                <Text>{i+1} - </Text>
                <ListItem.Content>
                <ListItem.Title numberOfLines={1} style={{width: 250}}>{item.descricao}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <Dialog
            isVisible={modal}
            onBackdropPress={abreModal}
            >
            <Dialog.Title title={item.tipoDenuncia}/>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }} >
                <Text style={{textAlign: 'left', fontSize: 8, color: "#6F6F6F"}}>{item.localizacao}</Text>
           <Button size="sm" titleStyle={{fontSize: 8}} color={ item.status == "Em andamento" || item.status == "Em aberto"  ? "warning" : "success"} buttonStyle={{alignSelf: 'stretch'}} >{item.status}</Button>
          </View>
            <Text style={{marginTop: 10, textAlign: 'justify'}}>{item.descricao}</Text>
            <Text style={{marginTop: 10, borderTopColor: "#939393", borderTopWidth: 0.5, fontWeight: '500'}}>Solução</Text>
            <Text style={{marginTop: 10, textAlign: 'justify'}}>"{item.descricaoSolucao}"</Text>
            <Text style={{marginTop: 10, textAlign: 'right', fontSize: 8}}>-{item.solucionador}</Text>
            </Dialog>
            </View>
            ))
        }

        </View>
    );
};

export default Denuncias;