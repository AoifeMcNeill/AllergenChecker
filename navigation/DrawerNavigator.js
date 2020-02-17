import React from 'react';

import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import scanner from '../pages/scanner';
import addAllergen from '../pages/addAllergen';
import App from '../App';

const DrawerNavigator = createDrawerNavigator({
  scanner: scanner,
  addAllergen: addAllergen,
  App: App,
});

export default DrawerNavigator;
