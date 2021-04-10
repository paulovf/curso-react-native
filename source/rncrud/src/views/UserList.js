import { getActionFromState } from '@react-navigation/core';
import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
    //console.warn(Object.keys(props));
    
    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDeletion(user){
        Alert.alert("Excluir Usuário", `Deseja excluir o usuário ${user.id}?`, [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: obj }) {
        return (
            <ListItem 
                key={obj.id} 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', obj)}>
                
                <Avatar 
                    source={{uri: obj.avatarUrl}} />
                
                <ListItem.Content>
                    <ListItem.Title>{obj.name}</ListItem.Title>
                    <ListItem.Subtitle>{obj.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    onPress={() => props.navigation.navigate('UserForm', obj)}
                    type='clear'
                    name='edit'
                    size={25}
                    color='orange'
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDeletion(obj)}
                    type='clear'
                    name='delete'
                    size={25}
                    color='red'
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};
