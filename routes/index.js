// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../ecrans/tabs';
import MessagesDetails from '../ecrans/MessageDetails';



const Stack = createNativeStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={BottomTabs}/>
            <Stack.Screen name='MessageDetails' component={MessagesDetails} options={{headerShown:true}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default routes