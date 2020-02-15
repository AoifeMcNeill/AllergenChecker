import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import menuButton from './menuButton';
import Profile from '../pages/profile';
import Allergies from '../pages/addAllergen';
import { headerStyle, mainColor } from './headerStyle';

const profileNav = createStackNavigator({
    UserProfile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'My Profile',
            headerLeft: <menuButton navigationProps={ navigation }/>,
            
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
    Allergies: {
        screen: Allergies,
        navigationOptions: () => ({
            title: 'Add Allergen/Intolerance',
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    }
});

export default profileNav;