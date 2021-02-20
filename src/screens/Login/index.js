import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

const apiUsuario ={
    id: 1,
    email: "ka@teste.com",
    senha:"123"
}

function Login(props) {

    function autenticacao(){
       if(apiUsuario.email == usuario && apiUsuario.senha == senha){
           props.navigation.navigate("Tarefas")
       }else{
           Alert.alert("Usuário inválido","Email ou senha errado")
       }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");


    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput placeholder="Digite o email..." style={styles.input} value={usuario} onChangeText={(text) => setUsuario(text)}/>
                    <TextInput placeholder="Digite o senha..." style={styles.input} value={senha} onChangeText={(text) => setSenha(text)} secureTextEntry={true}/>

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                
            </ImageBackground>

        </View>
    )
}


export default Login;