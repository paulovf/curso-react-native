import React from 'react';
import { Text } from 'react-native';

export default props => {
    return (
        <>
            <Text>Início dos membros da família:</Text>
            {props.children}
            <Text>Fim dos membros da família:</Text>
        </>
    );
};
