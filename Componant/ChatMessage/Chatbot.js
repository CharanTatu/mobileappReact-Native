import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import Dialogflow_V2 from 'react-native-dialogflow';
import {Bubble, GiftedChat, Send, BubbleProps,Reply} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bot = {
    _id: 4,
    name: 'Mr. Bot',
    avatar: require('../assets/chatbot.png'),
  };

const Chatbot = () => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    {
      _id: 3,
      text: `How can I help You ?`,
      createdAt: new Date(),
      user: Bot,
    },
  ]);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
}, []);

  const onSend = (message) => {
    setMessages(previousMessages => {
      return GiftedChat.append(previousMessages, message);
    });
    let msg = message[0].text;
    console.log("Msg_________________",message);
    Dialogflow_V2.requestQuery(
      msg,
      result => {
        console.log('result______________', result,);
        handleGoogleResponse(result);
      },
      error => {
        console.log("error____________",error);
      },
    );
  };

  const handleGoogleResponse = (result) => {
    // let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    // sendBotResponse(text);
  };

  const sendBotResponse = (text) => {
    let msg = {
        _id: messages.length + 1,
        text,
        createdAt: new Date(),
        user: Bot,
      };
      setMessages(previousMessages => {
        return GiftedChat.append(previousMessages, [msg]);
      });
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

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <View style={{ flex: 1 }}>
   <GiftedChat
        renderBubble={(props) => renderBubble(props)}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </View>
  );
};


export default Chatbot


  export const dialogflowConfig = {
    "type": "service_account",
    "project_id": "messagechatrn",
    "private_key_id": "57e7d9c5206fe49a36bb51de5ca895e5c4310e3a",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCv7zrbndkYbfT7\nHHAWAywucPm8+YwfIo/i3t9J0F+4L6MP0+YxgIp5ggtqZr99n1UJzc5rj/fj2wfI\n56r3CRMGr0o7RirC+Q89J9WlP7hUdyD5WxC47CJiNuyaNmyhf1Hu5+DuuFOptNcI\nfFEzhm3toT/Spc8rJC/HTO1CUK+8iijx/vTWbTlBzplKhGoYYTWFZ+fuglnKOcqr\nVAu6A7oT6BHZF/MvNzDBGKGwxranBvQYXSvdD4eNDPsLptKSHEUWden4Rso7mGBc\nultk+VYnolZjZeWCC/Jy77zMWgw4j7RxSuYFqq8vBHat2nvZNee/24hw7POyXYND\nXekDUpLLAgMBAAECggEAB9nt5H3HgcGWcduzsifIwaHPuKaM9u68lmv1HFQs5rP+\n25FMmopD+RGGn47082Q4OqHGmSI+9m+AihoHP9MAgwcw5t2bbEFfyWONCJIuuwY9\n9c13POlnd2lAEc8P9f0P6Pt2xvB5kKnorBDwMWkfCsBsGrhvkFtNuTUuTraka7jO\nU+N+lRVA9V4aWZXFK8b+p0QMYKv3oxxsWom3eg8TW5fYX++b247/mXjryxBBvzMo\nLuRSvxMgenSLo0Mh85sAQMMqYugcgT8hoS85Oc0YvCGRGDcW2WRmeNBbLe6VbBSn\nptlSNOqJgSahxp1dg/+8840NP5Ba3LVGG6msY0zj0QKBgQDouxpz8RfJNd1qchDc\nAylj/P5ct12Co+XHAIg7qaHXCjTUEBd+n8nzm7b4SPdYLo7K7l8po6gQ4YlSaUS6\n4PHgKZnhx+wrr/RVDsm/FBAOxNug2t7ZRNnz+cAUtb+HLB/76akFR/B7mOYouJSL\njCVm0eW4uiN/F9gN0tgQAgKIPQKBgQDBhmL5Z7Ygg4ijDlw0m2sS+8aIhsRphkHa\nyx5EF4L3Z0Der9pAWQYka8T8j8c+xgBa75f6kv0uZ9m5G2aYpg2jU50kbQ6ioMv/\nmyBO9yJcWCEb9s0JvvuAye8s/nc2rdZjqvfbpL63YKdqCLjTpXpkSA8RMSHTKT5t\ntpEp+VKvpwKBgHIpdexx040sExToJ0UFeARIUi4A9Knk5A4eQLWjnHPz2b48tomy\nsEoDlFlu0YY8MGdzTtMKKKM/PzFh2gkh1wRy471RaJR1l5Ex090bZlUYU/Qv6SkD\nETcQyBxgmzcfegEEuZiRlXHLqvtGr/dUI/Sv+dQH2um5NI5zYvFXSw6xAoGBAJmr\nZJw2xmA7EhyoIn+Dihqg4p02pnBEs7ZQ48+d+9kInHI3oU7HYiE5kkoawVQPVejf\nqAbJAVIAFNrv7x/3e4zdsEJkduKcXGCzhYwuoZJCSMgzycybYop5zvojdfZtQ3gR\nIo++2dIzZbzFAD7Pf8hxj8VPBlTuwyvLdKmn2QixAoGBAJpS7Mtjl3gPnQwoJQA5\nXNrmxZScOUSUZQzWaWBoyoYLcxzbPGuY+s2iACYa0Q1KTaGlupL0A2EM1TIDV8M6\nWvpr8sFD1iljordxm2ot9Q/BXcIUAjOwVlekqt2LENRDcDJ5fW3L+7Gx87M5xsOp\nMcnC9QjojRfrLW92bgaEGW6d\n-----END PRIVATE KEY-----\n",
    "client_email": "dilogflowcdchatbot@messagechatrn.iam.gserviceaccount.com",
    "client_id": "102900293202990212720",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dilogflowcdchatbot%40messagechatrn.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
