import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import DrawerTrigger from './DrawerTrigger';

class Header extends React.Component {
  render() {
    return (
      <DrawerTrigger />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke',
  },
});

export default Header;
