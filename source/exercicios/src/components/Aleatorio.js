import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default ({ max, min }) => {
    /*
        O que vem como parâmetro (props) não tem seu valor alterado, é um Object.freeze. 
        (são valores somente leitura).
    */
    let aleatorio = Math.floor(Math.random()*max) + min;
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é { aleatorio }
        </Text>
    );
};
