import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './routes/TabNavigation';
import {NavigationContainer} from '@react-navigation/native'
import Home from './Screens/Home';
import Menu from "./Screens/Menu";
import CreateListing from "./Screens/CreateListing";
import AvailableListing from "./Screens/AvailableListing";
import Chat from "./Screens/Chat";
import FollowUp from "./Screens/FollowUp";
import BusRoute from "./Screens/BusRoute";
import LogoScreen from "./Screens/LogoScreen";
import LogIn from "./Screens/LogIn";


const Stack= createNativeStackNavigator();

export default function App() 
{
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
    await Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
    });
    setFontsLoaded(true);
    };

    useEffect(() => 
    {
    loadFonts();
    }, []);

    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="CreateListing"
            component={CreateListing}
            options={{ title: "Create Listing"}}
            />

            <Stack.Screen
            name="Logo Screen"
            component={LogoScreen}
            options={{headerShown: false }}
            />

            <Stack.Screen
            name="Chat"
            component={Chat}
            options={({route})=> ({
                title: route.params.UserName,
                headerBackTitleVisible: false,
            })}

            />
    </Stack.Navigator>
    </NavigationContainer>
    );
}