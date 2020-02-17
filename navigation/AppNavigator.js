import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import DrawerNavigator from 'AllergenChecker/navigation/DrawerNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: DrawerNavigator,
  }),
);
