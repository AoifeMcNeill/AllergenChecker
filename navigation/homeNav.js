import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {View} from 'react-native';
import menuButton from './menuButton';
import BarcodeScanner from '../pages/scanner';
import {headerStyle, mainColor} from './HeaderStyle';

//Navigation menu stack opens upon pressing "Hamburger" icon from home.
const homeNav = createStackNavigator({
  Home: {
    screen: BarcodeScanner,
    navigationOptions: ({navigation}) => ({
      title: 'Scanner',
      headerLeft: <menuButton navigationProps={navigation} />,
      headerRight: <View />,
      headerTitleStyle: headerStyle,
      headerTintColor: mainColor,
      headerStyle: {
        backgroundColor: '#fff',
      },
    }),
  },
});

export default homeNav;
