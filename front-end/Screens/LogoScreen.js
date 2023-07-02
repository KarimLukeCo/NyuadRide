import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { NativeBaseProvider, Box, Center, Square, Circle  } from "native-base";

export default function LogoScreen({navigation}) {

  useEffect(() => 
  {
    const timeout = setTimeout(() => {
      navigation.navigate('Home'); // Navigate to the 'Home' screen
    }, 3000); // Delay in milliseconds (3 seconds)

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, [navigation]);


  return (
    <View style={styles.container}>
      <NativeBaseProvider>
    <Center>
      <Center
        bg="purple.500" // Set the background color to purple
        _text={{
          color: "white",
          fontWeight: "bold",
          fontSize: "36px",
        }}
        height={100}
        marginTop={350}
        borderRadius={20}
        fontSize={"large"}
        width={{
          base: 220,
          lg: 180
        }}
      >
        NYUAD RIDE
      </Center>
    </Center>
    </NativeBaseProvider>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: '#9d4edd',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center'

  },

})