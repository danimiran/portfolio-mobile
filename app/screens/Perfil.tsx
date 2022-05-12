import { Icon, ListItem } from "@rneui/base";
import React from "react";
import { View, Text } from "react-native";

const Perfil = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text
        style={{margin: 20,fontSize: 25, textAlign: "center",marginTop: 100,marginBottom: 30,}}>
        Perfil
      </Text>
      <ListItem  bottomDivider onPress={() => navigation.navigate("AlteraSenha")}>
        <Icon name="person-circle" type="ionicon"/>
        <ListItem.Content>
          <ListItem.Title>Alterar Perfil</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider>
        <Icon name="log-in-outline"  type="ionicon"/>
        <ListItem.Content>
          <ListItem.Title>Sair</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default Perfil;
