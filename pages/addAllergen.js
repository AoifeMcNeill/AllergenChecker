import React, {Component} from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class addAllergen extends Component {
  constructor() {
    super();
    state = {
        textInputs: [],
    }
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Add a food that you are allergic/intolerant to:</Text>
        <TextInput style={styles.input} onChangeText={text => {let{textInputs} = this.state; textInputs[index] = text; this.setState({
          textInputs,
        });
      }} calue={this.state.textInputs[index]}></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => {
        let {textInputs} = this.state; textInputs[index] = ''; this.setState({
          textInputs,
        });
      }}>Clear</TouchableOpacity>
        <FlatList style={{flex: 1}} data={[1,2,3,4,5]} renderItem={({item, index}) => {
          return (
            <View style={{height: 100, backgroundColor: '#F0F0F0', width: 300, alignSelf: 'center', margin: 10,
          }}></View>
          )
        }}></FlatList>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 20,
    flexWrap: 'wrap',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 75,
    backgroundColor: '#2c3539',
  },

  input: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    flex: 1,
  },
});