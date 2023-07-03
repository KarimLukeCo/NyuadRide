import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Button,NativeBaseProvider } from "native-base";

export default function Home({navigation}) {
  const username="Karim"
  const HandleClick=()=>
  {
    navigation.navigate("CreateListing")
  }

  const HandleClickText=()=>
  {
    navigation.navigate("Chat",{UserName: username})
  }

  return (
    <View style={globalStyles.container}>
      <NativeBaseProvider>
      <Button style={styles.mybutton} onPress={HandleClick}>Create Trip</Button>
      <Button onPress={HandleClickText}>Text me</Button>
      </NativeBaseProvider>
    </View>
  );
}

const styles=StyleSheet.create({
  mybutton:{
    margin: 10,

  },
})

