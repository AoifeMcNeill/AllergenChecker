import React, {Component} from 'react';
import {
  Text,
  View,
  Linking,
  TouchableHighlight,
  Platform,
  StyleSheet,
  Scrollview,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';

export default class addAllergen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Scrollview>
        <View>
          <Header
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{text: 'Preferences', style: {color: '#fff'}}}
            rightComponent={{icon: 'home', color: '#fff'}}
          />
        </View>
      </Scrollview>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headingText: {
    color: 'black',
    fontSize: 24,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
});
