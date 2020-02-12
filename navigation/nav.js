import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import homeNav from './homeNav';
import addAllergenNav from './addAllergenNav';
import profileNav from './profileNav';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: homeNav,
      navigationOptions: {
        title: 'Home',
      },
    },
    AddAllergen: {
      screen: addAllergenNav,
      navigationOptions: {
        title: 'Add Allergen',
      },
    },
    Profile: {
      screen: profileNav,
      navigationOptions: {
        title: 'My Profile',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: '#6daad9',
    },
  },
);

const nav = createAppContainer(DrawerNavigator);

export default nav;
