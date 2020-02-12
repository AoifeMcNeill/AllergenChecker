/* eslint-disable react-native/no-inline-styles */

//Menu button is designed as the classic "Hamburger Icon" style.
//toggleDrawer is used to open up the menu once the "Hamburger" is pressed

//Imports
import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

class menuButton extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{
              width: 25,
              height: 25,
              marginLeft: 25,
              tintColor: '#A5ACAA',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
//Can be used across the app
export default menuButton;
