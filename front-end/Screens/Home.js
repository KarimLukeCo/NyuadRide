import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Button,NativeBaseProvider } from "native-base";

export default function Home({navigation}) {
  const HandleClick=()=>
  {
    navigation.navigate("CreateListing")
  }

  return (
    <View style={globalStyles.container}>
      <NativeBaseProvider>
      <Button onPress={HandleClick}>Create Trip</Button>
      </NativeBaseProvider>
    </View>
  );
}