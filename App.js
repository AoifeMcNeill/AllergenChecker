import React, {Component} from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text style={styles.simpleText}>Welcome!</Text>
      </View>
    )
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
});
