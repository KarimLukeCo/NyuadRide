import React, {useState, useEffect,useCallback} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {FlatList, NativeBaseProvider } from "native-base"
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Chat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Man!!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])


  const renderMyBubble=(props)=>{
    return(
    <Bubble
    {...props}
      wrapperStyle={{
        right: {backgroundColor: '#9d4edd'},
        left: {backgroundColor: '#9d4edd'},
      }}

      textStyle={{
        right: {
          color: '#fff'
        },
        left: {
          color: '#fff'
        },
      }}

    />
    );
  }

  const rendersend=(props)=>{
    return(
      <Send {...props}>
          <View>
            <MaterialCommunity 
            name='send-circle' 
            size={32} 
            color ='#9d4edd'
            style={{
            marginBottom: 5,
            marginRight: 5,}}/> 
          </View>
      </Send>
    );

  }
  const scrollToBottomComponent=()=>{
    return(
      <FontAwesome name='arrow-down' size={22} color='#333'/>
    );
  }

  return (
    <View style={globalStyles.container}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderMyBubble}
      alwaysShowSend
      renderSend={rendersend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    /> 
    </View>)
   
}