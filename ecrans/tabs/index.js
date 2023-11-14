// import { View, Text, Settings } from 'react-native'
import React from 'react' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../Home'
import Messages from '../Messages'
import Params from '../Paramettre'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const BottomTabs = () => {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator 
        initialRouteName='home_page' 
        screenOptions={{
            tabBarInactiveTintColor: '#e91e63', 
            headerShown: false
        }}>
        {/* affichage de l'onglet1 pour l'ecanr 1  */}
        <Tab.Screen 
            name='home_page1' 
            component={Home} 
            options={{
                tabBarLabel: 'Dashborad', 
                tabBarIcon:({color, size})=>(
                    <MaterialCommunityIcons name='home' color={color} size={size}/>
                )}}/> 

        {/* affichage de l'onglet1 pour l'ecanr 1  */}
        <Tab.Screen 
            name='Messages' 
            component={Messages} 
            options={{
                tabBarLabel: 'Messages', 
                tabBarIcon:({color, size})=>(
                    <MaterialCommunityIcons name='chat' color={color} size={size}/>
                ),
                // tabBarBadge: 1,
                }}/> 

        {/* affichage de l'onglet1 pour l'ecanr 1  */}
        <Tab.Screen 
            name='Params' 
            component={Params} 
            options={{
                tabBarLabel: 'Settings', 
                tabBarIcon:({color, size})=>(
                    <MaterialCommunityIcons name='account-settings-outline' color={color} size={size}/>
                )}}/> 

    </Tab.Navigator>
  )
}

export default BottomTabs