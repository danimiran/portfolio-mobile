import React from "react";
import { Avatar, Card } from "@rneui/themed";
import {Text, ScrollView, View} from "react-native";
import { Button, Icon } from "@rneui/base";

const Home = () => {
  // const [denuncias, setDenuncias] = useState([]);

  const data = [{
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
    descricaoSolucao: "Foram ajustadas as ",
    solucionador: "Gestor de Serviços Publicos",
    tipoDenuncia: "Serviços Publicos"
},
{
  foto: "https://rarebreedvet.com/wp-content/uploads/2021/01/female_5.jpg",
  nome: "Maria Rosa",
  status: "Em aberto",
  descricao: "As calçadas estão com buracos, assim os pedestres tem que andar pela rua.",
  localizacao: "Guarulhos -SP",
  curtidas: 3,
  comentarios : {
    nome: "Maria Souza",
    descricao: 'Que bom que foi resolvido!'
  },
  solucionado: false,
  descricaoSolucao: "",
  solucionador: "",
  tipoDenuncia: "Mobilidade Urbana"
},
{
  foto: "https://th.bing.com/th/id/R.4688979fd7f92fd22f9a0cc72d368b43?rik=9a%2bnMsWydsdfhw&pid=ImgRaw&r=0",
  nome: "Antonio José",
  status: "Em andamento",
  descricao: "O bairro está com falta de água a uns 3 dias, preciso de uma solução.",
  localizacao: "Guarulhos -SP",
  curtidas: 3,
  comentarios : {
    nome: "Maria Souza",
    descricao: 'Que bom que foi resolvido!'
  },
  solucionado: false,
  descricaoSolucao: "",
  solucionador: "",
  tipoDenuncia: "Saneamento basico"
}

];

  return (
    <ScrollView>
      <Text style={{fontSize: 20, margin: 10}}>Denúncias</Text>
        {
          data.length > 0 ?
          data.map((itemDenuncias: any, i) => (
          <Card key={i} containerStyle={{margin: 0, marginBottom: 15}}>
            <View style={{
             flexDirection: "row",
             justifyContent: 'space-around'
          }} >

              <Avatar  avatarStyle={{borderColor: "#939393", borderWidth: 1}}
              size={40}
              rounded
              source={itemDenuncias.foto ? { uri: itemDenuncias.foto } : {}}
              key={`${i}-${i}`}
            />
           <Text style={{ textAlign: "center", padding: 10, color:"#6F6F6F"}}> {itemDenuncias.nome}</Text>
           <Button size="sm" titleStyle={{fontSize: 10}} color={ itemDenuncias.status == "Em andamento" || itemDenuncias.status == "Em aberto"  ? "warning" : "success"} buttonStyle={{marginTop: 10, alignSelf: 'stretch'}} >{itemDenuncias.status}</Button>
          </View>
            <Card.Divider />
            <View style={{ }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'left', fontSize: 8, color: "#6F6F6F"}}>{itemDenuncias.localizacao}</Text>
                <Text style={{textAlign: 'right', fontSize: 8, color: "#6F6F6F"}}>{itemDenuncias.tipoDenuncia}</Text>
            </View>
             <Text style={{textAlign: 'justify', marginBottom: 10, marginTop: 10}}>{itemDenuncias.descricao}</Text>
             <View style={{flexDirection: 'row'}}>
             <Icon name='like1' size={15} type='antdesign' color="#939393" containerStyle={{marginRight: 5}}/>
             <Icon name='comment-alt' size={13} containerStyle={{marginTop: 2, marginRight: 5}} type='font-awesome-5' color="#939393" />
             {itemDenuncias.solucionado ?
             <Icon name='lightbulb' size={15} type='foundation' color="#939393" />
             : 
             null
            }
             </View>
            </View>
          </Card>
        ))
        :
        "Tem nada aqui"
      }
    
    </ScrollView>
  );
};

export default Home;
