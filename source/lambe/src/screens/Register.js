import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/user';

class Register extends Component {
    state = {
        name: '',
        email: '', 
        password: ''
    };

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({
                name: '',
                email: '', 
                password: ''
            });
            this.props.navigation.navigate('Profile'); // Feed
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input} 
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name: name })} />
                <TextInput placeholder='Email' style={styles.input} 
                    keyboardType='email-address' value={this.state.email}
                    onChangeText={email => this.setState({ email: email })} />
                <TextInput placeholder='Senha' style={styles.input} 
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password: password })} />
                <TouchableOpacity 
                    onPress={() => { this.props.onCreateUser(this.state); }} 
                    style={styles.button}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
});

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading 
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
