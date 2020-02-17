import React from 'react';

import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import scanner from 'AllergenChecker/pages/scanner';
import addAllergen from 'AllergenChecker/pages/addAllergen';
import App from 'AllergenChecker/App';

const DrawerNavigator = createDrawerNavigator({
  scanner: scanner,
  addAllergen: addAllergen,
  App: App,
});

export default DrawerNavigator;
