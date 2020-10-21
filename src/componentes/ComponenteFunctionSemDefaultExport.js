import React from 'react';
import {Text, StyleSheet, View, Button, Alert} from 'react-native';

const ComponenteFuncaoSemDefault = (props) => {

    const click = () => {
        props.texto = "Novo"
        Alert.alert('Clicou! Porém nao adianta alterar o valor da props')
    }

    return (
        <View>
            <Text style={styles.title}>Exemplo 1:</Text>
            <Text style={styles.basicText}>{props.texto}</Text>           
            <Button title='Clique' onPress={click}></Button>
        </View>
    )
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

export {
    ComponenteFuncaoSemDefault
}