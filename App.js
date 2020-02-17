import React, {Component} from 'react';

import {Text, View, StyleSheet} from 'react-native';

import ScreenName from 'AllergenChecker/components/ScreenName.js';

import Header from 'AllergenChecker/components/Header.js';

export default class App extends Component {
  constructor() {
    super();
  }

  static navigationOptions = {};

  render() {
    return (
      <View>
        <Text style={styles.simpleText}>Welcome!</Text>
        <React.Fragment>
          <Header />
          <View style={styles.container}>
            <ScreenName name={'Home'} />>
          </View>
        </React.Fragment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  simpleText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    flexWrap: 'wrap',
    fontSize: 18,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
