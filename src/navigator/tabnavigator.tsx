import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from '../screens/welcomeScreen'
import CategoriesScreen from '../screens/categoriesScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Welcome"
                component={WelcomeScreen}
                options={{
                    tabBarLabelPosition: 'below-icon',
                    // tabBarIcon:({focused})=>(
                    //     focused&& <W
                    // )
                }}
            />
            <Tab.Screen name="categorie"
                component={CategoriesScreen}
                options={{
                    tabBarLabelPosition: 'below-icon',
                    // tabBarIcon:({focused})=>(
                    //     focused&& <W
                    // )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator