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
    this.state = {
        addInput: [],
        textInput: ''
    }
  };

  render(){
    return(
      <View>
        <Text>Add a food that you are allergic/intolerant to:</Text>
        <TextInput></TextInput>
        <TouchableOpacity>Add</TouchableOpacity>
        <FlatList></FlatList>
      </View>
    )
  }
};
