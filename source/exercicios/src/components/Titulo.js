import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default props => {
    /** <> é o mesmo que <React.Fragment> */
    return (
        <>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    );
};
