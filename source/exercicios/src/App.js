import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';*
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexBoxV1 from './components/layout/FlexBoxv1';
// import FlexBoxV2 from './components/layout/FlexBoxv2';
// import FlexBoxV3 from './components/layout/FlexBoxv3';
// import FlexBoxV4 from './components/layout/FlexBoxv4';
import Mega from './components/mega/Mega';

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={12} />
        {/*<FlexBoxV4 />
        <FlexBoxV3 />
        <FlexBoxV2 />
        <FlexBoxV1 />
        <UsuarioLogado usuario={{nome: "Gui", email: "gui@gui.com"}} />
        <UsuarioLogado usuario={{nome: "Ana"}} />
        <UsuarioLogado usuario={{email: "carlos@empresa.com"}} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Júlia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3} />
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Botao />
        <Titulo principal="Cadastro Produto" secundario="Tela de cadastro do produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} /> */}
        {/* Comentários */}
        {/*<MinMax min={3} max={20} />
        <MinMax min={94} max={1} />*/}
        {/*<CompPadrao />
        <Comp1 />
        <Comp2 />
        <Text>{ 1 + 1 }</Text>
        <Primeiro />*/}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});
