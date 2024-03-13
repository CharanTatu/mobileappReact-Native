import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'data',
  location: 'default',
});

function DashboardSpringCt({ navigation }) {
  const [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
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

  useEffect(()=>{
    getData();
  })

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
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Employee ID: {item.user_id}</Text>
      <Text style={{ fontSize: 16 }}>Name: {item.user_name}</Text>
      <Text style={{ fontSize: 16 }}>Age: {item.user_age}</Text>
      <Text style={{ fontSize: 16 }}>Address: {item.user_status}</Text>
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
    <View style={{flexDirection:'row',padding:3}}>
    <Text style={{textAlign:'center',fontWeight:'400',fontSize:16,}}>SpringCT Employee List</Text>
   <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginLeft:'30%'}}>
   <TouchableOpacity
          style={{
            height: 30,
            width: 80,
            backgroundColor: '#FFA500',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
          }}
          onPress={() => navigation.navigate('EmployeeAdd')}
        >
          <Text style={{ color: 'black' }}>New-Add</Text>
        </TouchableOpacity>
   </View>
    </View>
      <View style={{ flex:1, top: 15}}>
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


export default DashboardSpringCt
