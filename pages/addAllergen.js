import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, TextInput} from 'react-native';

export default class addAllergen extends Component{
  constructor(props){
    super(props);
    this.state = {
      textInput : []
    }
  }

  addTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput key={key} />);
    this.setState({textInput})
  }
  render(){
    return(
      <View>
        <Button title='+' onPress={() => this.addTextInput(this.state.textInput.length)} />
        {this.state.textInput.map((value, index) => {
          return value
        })}
      </View>
    )
  }
}