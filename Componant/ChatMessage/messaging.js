import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native';

const Messages = [
  {
    id: '9',
    userName: 'Jenny Doe',
    userImg: require('../assets/map-marker.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/map-marker.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/map-marker.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/map-marker.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/map-marker.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Messaging = ({navigation}) => {
    return (
      <View style={styles.container}>
      <FlatList 
       data={Messages}
       keyExtractor={item=>item.id}
       renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('chat', {userName: item.userName,userId:item.id})}>
            <View style={{flexDirection:'row',marginTop:'2%',marginBottom:'3%',width:'100%',borderBottomWidth:1,borderBottomColor:'blue'}}>
              <Image source={{uri:"https://source.unsplash.com/1024x768/?girl"}} style={{height:50,width:50,alignSelf:'center',borderRadius:100,marginLeft:'2%'}}/>
                <View style={{maxWidth:'90%',padding:'3%'}}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>{item.userName}</Text>
                <Text style={{fontSize:14}}>{item.messageTime}</Text>
                <Text style={{fontSize:15}}>{item.messageText}</Text>
                </View>
           </View>
        </TouchableOpacity>
      )}
       />
      </View>   
  )
};

export default Messaging;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
