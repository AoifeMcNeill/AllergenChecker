import React from 'react';
import {Text, FlatList, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

export default class addAllergen {
    constructor() {
        super();
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.simpleText}>Add your allergen/intolerance:</Text>
                <TextInput style={styles.inputStyle}></TextInput>
                <TouchableOpacity style={styles.button}></TouchableOpacity>
                <TouchableOpacity style={styles.button}></TouchableOpacity>
                <FlatList styles={styles.listStyle}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    },
    
    simpleText: {
        alignSelf: 'center',
        flex: 1,
        color: 'black',
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
    },

    inputStyle: {
        color: 'black',
        alignSelf: 'center',
        borderColor: 'black',
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: 'white',
        fontSize: 20,
        flex: 1,
    },

    button: {
        alignSelf: 'right',
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        padding: 10,
    },

    listStyle: {
        borderStyle: 'solid',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: 'black',
    },
})
