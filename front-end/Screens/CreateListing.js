import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {  Input, FormControl, WarningOutlineIcon, NativeBaseProvider, Button } from "native-base";

export default function CreateListing({navigation}) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [showWarnings, setShowWarnings] = useState(false);

  useEffect(() => {
    if (!showWarnings) {
      setTime("");
      setDate("");
      setOrigin("");
      setDestination("");
    }
  }, [showWarnings]);

  const handleChangeOrigin = (text) => setOrigin(text);
  const handleChangeDestination = (text) => setDestination(text);
  const handleChangeTime = (text) => setTime(text);
  const handleChangeDate = (text) => setDate(text);

  const handleSubmit = () => {
    setShowWarnings(true);
    // Perform form submission or API call here
    // You can access the input values: origin, destination, time, date
    // Validate the form inputs before submitting
    if (!origin || !destination || !time || !date) {
      // Display additional error handling or prevent submission if fields are not filled
      return;
    }
    // Submit the form or perform necessary actions

    setShowWarnings(false);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
      <FormControl style={styles.form} isRequired isInvalid={!origin && showWarnings}>
          <FormControl.Label>From:</FormControl.Label>
          <Input placeholder="Enter Origin" defaultValue={origin} onChangeText={handleChangeOrigin} />
        </FormControl>

        <FormControl style={styles.form} isRequired isInvalid={!destination && showWarnings}>
          <FormControl.Label>To:</FormControl.Label>
          <Input placeholder="Enter Destination" defaultValue={destination} onChangeText={handleChangeDestination} />
        </FormControl>

        <FormControl style={styles.form} isRequired isInvalid={!time && showWarnings}>
          <FormControl.Label>Time:</FormControl.Label>
          <Input placeholder="Enter Time" defaultValue={time} onChangeText={handleChangeTime} />
        </FormControl>

        <FormControl style={styles.form} isRequired isInvalid={!date && showWarnings}>
          <FormControl.Label>Date:</FormControl.Label>
          <Input placeholder="Enter Date" defaultValue={date} onChangeText={handleChangeDate} />
        </FormControl>

        <Button style={styles.button} onPress={handleSubmit}>
          Submit
        </Button>
      </NativeBaseProvider>
    </View>
  );
}

const styles= StyleSheet.create({
  container:
  {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  form:{
    margintop: 20,
    marginBottom: 20,
  },
  button: 
  {
    backgroundColor: "purple",
    maxWidth: 100,
    textAlign: 'center',
    alignItems: 'center',
  },
})