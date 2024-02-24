import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'data',
  location: 'default',
});

function ToDoTaskScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('Active');
  const [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    // getData();
    // create table database
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_age INTEGER,user_status VARCHAR(20))',
              []
            );
          }else{
            getData();
          }
        }
      );
    });
  }, []);

  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM table_user',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const listItemView = (item) => (
    <View
      key={item.user_id}
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 6,
        marginBottom: 16,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ID: {item.user_id}</Text>
      <Text style={{ fontSize: 16 }}>Name: {item.user_name}</Text>
      <Text style={{ fontSize: 16 }}>Date: {item.user_age}</Text>
      <Text style={{ fontSize: 16 }}>Status: {item.user_status}</Text>
    </View>
  );

  const listViewItemSeparator = () => (
    <View
      style={{
        height: 0.2,
        width: '100%',
        padding: 5,
      }}
    />
  );

  const setData = () => {
    if (name.length === 0 || age.length === 0) {
      alert('Please fill in required data');
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO table_user (user_name, user_age,user_status) VALUES (?,?,?)',
          [name, age, status],
          (tx, res) => {
            console.log('Results', res.rowsAffected);
            if (res.rowsAffected > 0) {
              alert('Add Successful', 'You are registered successfully');
              setAge('');
              setName('');
              setStatus('');
              getData();
            } else alert('Registration Failed');
          }
        );
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 0.5 }}>
        <StatusBar backgroundColor='#FFA500' />
        <TextInput
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
          placeholder='Add Your Good Name'
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'black',
            borderRadius: 8,
          }}
          placeholderTextColor='black'
        />
        <TextInput
          placeholder='Add Date'
          value={age}
          onChange={(e) => setAge(e.nativeEvent.text)}
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'black',
            borderRadius: 8,
          }}
          placeholderTextColor='black'
        />
        {/* <TextInput
          placeholder='Add Status'
          value={status}
          onChange={(e) => setStatus(e.nativeEvent.text)}
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'black',
            borderRadius: 8,
          }}
          placeholderTextColor='black'
        /> */}
        <TouchableOpacity
          onPress={setData}
          style={{
            backgroundColor: '#FFA500',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            width: 150,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit Data</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: 1 }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 110,
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#FFA500',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
          }}
          onPress={getData}
        >
          <Text style={{ color: 'black' }}>Fetch-new</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            width: 110,
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#FFA500',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
          }}
          onPress={() => navigation.navigate('Edit-Operation')}
        >
          <Text style={{ color: 'black' }}>User-Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            width: 110,
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#FFA500',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
          }}
          onPress={() => navigation.navigate('Delete-Operation')}
        >
          <Text style={{ color: 'black' }}>Delete</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.9, top: 15 }}>
        <FlatList
          data={flatListItems}
          ItemSeparatorComponent={listViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => listItemView(item)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default ToDoTaskScreen;