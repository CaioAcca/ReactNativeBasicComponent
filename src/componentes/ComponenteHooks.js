import React, {useState} from 'react';
import {Text, StyleSheet, Button, View, Alert} from 'react-native';

export default (props) => {

    const [counter, setCounter] = useState(0);

    click = () => {
        setCounter(counter + 1)
    }

    reset = () => {
        setCounter(0)
    }

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Exemplo 3:</Text>
            <Text style={styles.basicText}>{props.texto}</Text>  
            <Text style={styles.counter}>{counter}</Text>         
            <Button title='Incrementar' onPress={click}></Button>
            <Button title='Resetar' onPress={reset}></Button>
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
        color: 'white',
        width: '100%'
    },
    counter: {
        fontSize: 40,
        color: '#FFFFFF',
        backgroundColor: '#000000',
        width: 100,
        textAlign: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});