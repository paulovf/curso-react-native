import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Estilo from '../estilo';

import MegaNumeros from './MegaNumero';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde });
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    }

    /*gerarNumeros = () => {
        const { qtdeNumeros } = this.state;
        const numeros = [];

        for(let i = 0; i < qtdeNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros);
            numeros.push(n);
        }

        numeros.sort((a, b) => a - b)
        this.setState({ numeros });
    }*/

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a - b);
        this.setState({ numeros });
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map(num => {
            return <MegaNumeros key={num} num={num} />
        });
    }
    
    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}
