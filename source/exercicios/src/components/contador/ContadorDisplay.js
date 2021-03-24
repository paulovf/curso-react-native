import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtG, style.DIsplayText]}>
                {props.num}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,

    },
    DIsplayText: {
        color: '#fff'
    }
});
