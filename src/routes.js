import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'

const AppStack = createStackNavigator();

import FormIn from './pages/FormIn'
import Detail from './pages/Detail'

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{
                headerShown: true,
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#0c9"
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <AppStack.Screen name='FormIn' component={FormIn}
                    options={{
                        title: "Connect",
                        headerRight: () => (
                            <FontAwesome style={{ marginRight: 15 }}
                                name="connectdevelop"
                                size={24}
                                color="#fff" />
                        )
                    }}

                />
                <AppStack.Screen name='Detail' component={Detail} 
                 options={{
                    title: "Detalhe",
                    headerRight: () => (
                        <MaterialCommunityIcons style={{ marginRight: 15 }}
                            name="details"
                            size={24}
                            color="#fff" />
                    )
                }}
                 />
            </AppStack.Navigator>

        </NavigationContainer>

    );
}