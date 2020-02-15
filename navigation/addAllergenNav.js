//Nav menu for addAllergen

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {View} from 'react-native';
import addAllergen from '../pages/addAllergen';
import menuButton from './menuButton';
import {headerStyle, mainColor} from './headerStyle';

const addAllergenNav = createStackNavigator({
  addAllergen: {
    screen: addAllergen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Allergen/Intolerance',
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

export default addAllergenNav;
