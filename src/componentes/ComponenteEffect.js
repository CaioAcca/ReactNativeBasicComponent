import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Button, View, Alert, TouchableOpacity} from 'react-native';

export default (props) => {

    const [squares, setSquares] = useState([]);
    const [count, setCount] = useState(0)

    //Quando nao tem dependencia se comporta como o DidMount
    useEffect(() => {
        setSquares([
            {id : 1},
            {id : 2},
            {id : 3},
            {id : 4},
            {id : 5}
        ])
    }, [])

    setItem = (id) => {
        const newSquares = squares.map(square => {
            return square.id === id ? {...square, checked : !square.checked} : square
        });
        setSquares(newSquares)

        const totalSelected = newSquares.filter(item => {
            return item.checked
        })
        setCount(totalSelected.length)
    }

    return (
        <View style={styles.center}> 
        <Text style={styles.title}>Exemplo 4:</Text>
            <Text style={styles.basicText}>{props.texto}</Text>   
            <Text style={styles.basicText}>Itens selecionados {count}</Text>       
            <View style={[styles.container, styles.center]}>
                {
                    squares.map(item => {
                        return(
                            <TouchableOpacity onPress={() => setItem(item.id)} key={item.id.toString()}>
                                <View style={[styles.item, item.checked ? styles.selected : styles.unselected]}>
                                    <Text style={[styles.basicText, , item.checked ? styles.white : null]}>{item.id}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }                
            </View>

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
    },    
    center: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row'
    },
    basicText: {
      color: 'black',
      textAlign: 'center'
    },
    item: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: "#363636",
    },
    unselected: {
        backgroundColor: "#C0C0C0",
    },
    white: {
        color: 'white',
        fontWeight: 'bold'
    }

  });