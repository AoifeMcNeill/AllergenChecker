import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import SearchScreen from '../pages/addAllergen';
import menuButton from './menuButton';
import { headerStyle, mainColor } from './headerStyle';

const addAllergenNav = createStackNavigator({
    addAllergen: {
        screen: addAllergenScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Allergen/Intolerance',
            headerLeft : <menuButton navigationProps={ navigation }/>,
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
});

export default addAllergenNav;
