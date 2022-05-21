import React, { useEffect, useState } from 'react'
import { View, Text, Alert, TextInput, Button, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import SQLite from 'react-native-sqlite-storage'


const db = SQLite.openDatabase(
    {
        name: 'data',
        location: 'default'
        // createFromLocation: "/data/mydbfile.sqlite"
    }
)


function SqliteData({ navigation }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
        // getData();
        //create table database 
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_age INTEGER)',
                            []
                        );
                    }
                }
            )
        }
        )
    }, [])

    // const createTable = () => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             "CREATE TABLE IF NOT EXISTS"
    //             + "Users"
    //             + "(ID INTEGER PRIMARY KEY AUTOINCRIMENT, UserName TEXT , UserAge )",
    //             [],
    //             (txn, res) => {
    //                 console.log("created table", res)
    //             }
    //         )
    //     })
    // }

    const getData = () => {
        try {
            db.transaction((tx) => {
                // tx.executeSql(
                //     "SELECT user_name,user_age FROM table_user ",
                //     [],
                //     (tx, result) => {
                //         var lengt = result.rows.length;
                //         if (lengt > 0) {
                //             var userName = result.rows.item(0).user_name;
                //             var userAge = result.rows.item(0).user_age;
                //             // setName(userName)
                //             // setAge(userAge)
                //             console.log("data=====>get", userName, userAge)
                //         }
                //     }
                // )

                tx.executeSql(
                    'SELECT * FROM table_user',
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setFlatListItems(temp);
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }

    }
    let listItemView = (item) => {
        return (
            <View
                key={item.user_id}
                style={{ backgroundColor: 'white', padding: 20 }}>
                <Text >Id: {item.user_id}</Text>
                <Text>Name: {item.user_name}</Text>
                <Text>Age: {item.user_age}</Text>
            </View>
        );
    };
    let listViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.2,
                    width: '100%',
                    backgroundColor: '#808080',
                    padding: 5
                }}
            />
        );
    };

    const setData = () => {
        if (name.length == 0 || age.length == 0) {
            alert("please Add data")
        }
        else {
            db.transaction((tx) => {
                tx.executeSql(
                    'INSERT INTO table_user (user_name, user_age) VALUES (?,?)',
                    [name, age],
                    (tx, res) => {
                        console.log('Results', res.rowsAffected);
                        if (res.rowsAffected > 0) {
                            alert(
                                ' Add Successful',
                                'You are Registered Successful'
                            );
                        } else alert('Registration Failed');
                    }
                )
            })
        }
    }


    return (
        <View>
            <View>
                <StatusBar backgroundColor='mediumspringgreen' />
                <TextInput
                    onChangeText={(name) => setName(name)}
                    placeholder='UserName'
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />
                <TextInput
                    placeholder='UserAge'
                    onChangeText={(age) => setAge(age)}
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />
                <Button title='Submit-Data' onPress={setData} color='mediumspringgreen' />
            </View>
            <View style={{
                // flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 1,
                //marginLeft: '8%'
            }}>
                {/* <Button title='Get-Data' onPress={getData} color='mediumspringgreen' />
                <Button title='Edit-Data' onPress={() => navigation.navigate("Edit-Operation")} />
                <Button title='Delete' color='mediumspringgreen' onPress={() => navigation.navigate("Delete-Operation")} /> */}
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 110, marginTop: 10,
                        marginBottom: 10,
                        backgroundColor: "mediumspringgreen", //#FF5733
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2
                    }}
                    onPress={getData}
                >
                    <Text>Data-Get</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 110, marginTop: 10,
                        marginBottom: 10,
                        backgroundColor: "mediumspringgreen", //#FF5733
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2
                    }}
                    onPress={() => navigation.navigate("Edit-Operation")}
                >
                    <Text>User-Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 110, marginTop: 10,
                        marginBottom: 10,
                        backgroundColor: "mediumspringgreen", //#FF5733
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2
                    }}
                    onPress={() => navigation.navigate("Delete-Operation")}
                >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
            />
        </View>
    )
}

export default SqliteData


