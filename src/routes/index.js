import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Tarefas from '../screens/tarefas'


const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    Tarefas: {
        nome: "Tarefas",
        screen: Tarefas
    }
}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);
