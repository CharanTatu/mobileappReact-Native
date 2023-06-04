import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { firestore } from './firestoreDB';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  useEffect(() => {
    // const queryShanpSohot = firestore().collection('chats').doc("1234").
    // collection('message').orderBy("creaedAt","desc");
    // queryShanpSohot.onSnapshot(Snapshot=>{
    //  const allmessage = Snapshot.docs.map(snap=>{
    //     return{...snap.data(),createdAt:new Date()}
    //  })
    //  setMessages(allmessage)
    // })
    setMessages(
        [{
        _id: 1,
        text: 'Hello!!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://source.unsplash.com/1024x768/?girl',
        },
      },
      {
        _id:route.params.userId,
        text: 'HI 😁😒🤔!!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://source.unsplash.com/1024x768/?girl',
        },},]
       );
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log("messages_________",messages)
    const msg = messages[0];
    const senMsg = {...msg, senderId:route.params.userId} 
    setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, messages),
    firestore.collection('chats').doc("1234").collection('message')
      .add({...senMsg,createdAt:new Date(),})
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={42}
            color="red"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
