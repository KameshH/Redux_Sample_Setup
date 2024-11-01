import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabnavigator';

const MainNavigaitor = () => {
    return (
        <NavigationContainer >
            <TabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigaitor