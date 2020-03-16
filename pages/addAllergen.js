import React, {Component} from 'react';
import {Text, FlatList, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

function Item({title, parent}){
    return(
        <View style = {styles.item}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity style={styles.delete} onPress={parent.onDelete.bind(parent, title)}></TouchableOpacity>
        </View>
    );
}

export default class addAllergen extends Component{
    constructor() {
        super();
        this.state = {
            showText: [],
        }
        this.textInput = React.createRef();
    }

    onDelete(del){
        this.setState({showText: this.state.showText.filter(x => x.text != del)})
    }

    onAdd(){
        const toAdd = this.textInput.current._lastNativeText
        if(toAdd == "" || toAdd == undefined)
            return
        let duplicate = false
        for (let x of this.state.showText)
        {
            if(x.text == toAdd)
            {
                duplicate = true
                break
            }
        }
        if(duplicate)
            return
            
        const newState = this.state.showText
        newState.unshift({id:toAdd, text: toAdd})
        this.setState({showText: newState})
        this.textInput.current.clear()
        
        //get input from textinput
        //send input to flatlist
        //this.setState({showText: [{id:"foo", text: "Newly added"}]});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.simpleText}>Add your allergen/intolerance:</Text>
                <View style={styles.userInput}>
                    <TextInput style={styles.inputStyle} ref={this.textInput}></TextInput>
                    <TouchableOpacity style={styles.button} onPress={this.onAdd.bind(this)}></TouchableOpacity>
                </View>
                <FlatList styles={styles.listStyle} data = {this.state.showText} renderItem = {({item})  => <Item styles={styles.item} title={item.text} parent={this}/>}></FlatList>
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
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 14,
        backgroundColor: "#ccc",
        display: "flex",
        flexDirection: "row",
        flex: 1,
    },

    button: {
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: 'green',
        color: 'white',
        fontSize: 20,
        padding: 10,
        width: "13%",
        height: "75%",
        marginVertical: 7
    },

    listStyle: {
        borderStyle: 'solid',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: 'black',
    },

    item: {
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 14,
        backgroundColor: "#ccc",
        display: "flex",
        flexDirection: "row",
    },

    title: {
        fontSize: 32,
        flex: 1,
        marginVertical: 5,
    },

    delete: {
        backgroundColor: 'red',
        width: "5%",
        height: "30%",
    },

    userInput: {
        display: "flex",
        flexDirection: "row",
    },
})
