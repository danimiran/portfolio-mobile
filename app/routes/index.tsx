import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AlteraSenha from '../screens/AlterarSenha';
import CadastroUsuario from '../screens/Cadastro';
import CadastraDenuncia from '../screens/CadastroDenuncia';
import Denuncias from '../screens/Denuncias';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

const Menu = () => {
    return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: any;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Denuncias') {
                  iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
                }
                else if (route.name === 'Denunciar') {
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                } 
                else if (route.name === 'Perfil') {
                  iconName = focused ? 'person-circle' : 'person-circle-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#4ac9da',
              tabBarInactiveTintColor: 'gray',
              headerShown: false
            })
          }
          >
          <Tab.Screen name="Home"  component={Home} options={{headerShown: true, headerShadowVisible: true, headerTransparent: false,  headerTitle: "Home", headerStyle: {backgroundColor: "#FDFDFD"}, headerTintColor: "#6F6F6F", headerTitleStyle:{ textAlign: 'center'}}} />
          <Tab.Screen name="Denuncias" component={Denuncias} initialParams={{ pesquisa: ""}}/>
          <Tab.Screen name="Denunciar" component={CadastraDenuncia}/>
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      );
};

const Stack = createNativeStackNavigator();

const Navegacao = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={ {headerShown: false}}>
        <Stack.Screen name="Home" component={Menu} />
        <Stack.Screen name="CadastraUsuario" component={CadastroUsuario} options={{headerTransparent: false, headerShadowVisible: true, headerShown: true, headerTitle: "Cadastro", headerTintColor: "#939393"}} />
        <Stack.Screen name="Login" component={Login} options={{headerTransparent: true, headerShadowVisible: false, headerShown: true, headerTitle: "", headerTintColor: "#939393"}}/>

        <Stack.Screen name="AlteraSenha" component={AlteraSenha} options={{headerTransparent: false, headerShadowVisible: true, headerShown: true, headerTitle: "Perfil", headerTintColor: "#939393"}}/>
    </Stack.Navigator>  
    </NavigationContainer>
    );
}

export default Navegacao;