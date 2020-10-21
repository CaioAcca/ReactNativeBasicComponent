import React, { Component } from 'react';
import {Text, StyleSheet, Alert, View, Button} from 'react-native';

export default class extends Component {

    constructor(props){
        super(props)

        this.state = {
            texto: props.texto
        }

    }

    click = () => {
        this.setState({
            texto: this.state.texto == "Novo Texto" ? "Componente baseado em classe" : "Novo Texto"
        })
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Exemplo 2:</Text>
                <Text style={styles.basicText}>{this.state.texto}</Text>
                <Button title='Atualizar Estado' onPress={this.click}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    basicText: {
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
});