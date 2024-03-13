import React, {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
    name: 'data',
    location: 'default',
  });

function EmployeAdd({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');

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
          placeholder='Age'
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
          keyboardType="numeric"
        />
        <TextInput
          placeholder='Address'
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
        />
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

    </KeyboardAvoidingView>
  );
}


export default EmployeAdd
