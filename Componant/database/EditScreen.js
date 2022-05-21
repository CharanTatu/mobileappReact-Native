import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import SQlite from 'react-native-sqlite-storage'
const db = SQlite.openDatabase({
    name: 'data'
})
function EditScreen() {
    let [inputUserId, setInputUserId] = useState('');
    let [userName, setUserName] = useState('');
    let [userAge, setUserage] = useState('');

    let updateAllStates = (name, age) => {
        setUserName(name);
        setUserage(age);
    };
    let searchUser = () => {
        console.log("======search filed", inputUserId);
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [inputUserId],
                (tx, results) => {
                    var len = results.rows.length;
                    console.log("=====>", len)
                    if (len > 0) {
                        let res = results.rows.item(0);
                        updateAllStates(
                            res.user_name,
                            res.user_age
                        );
                    } else {
                        alert('No user found');
                        updateAllStates('', '');
                    }
                }
            );
        });
    };
    let updateUser = () => {
        console.log("====>", inputUserId, userName, userAge);

        if (!inputUserId) {
            alert('Please fill User id in search tab');
            return;
        }
        if (!userName) {
            alert('Please fill name');
            return;
        }
        if (!userAge) {
            alert('Please fill Contact Number');
            return;
        }


        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE table_user set user_name=?, user_age=?  where user_id=?',
                [userName, userAge, inputUserId],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        alert(
                            'updated Succes'
                        );
                    } else alert('Updation Failed');
                }
            );
        });
    };

    return (
        <View>
            <View>
                <View
                    style={{
                        height: 40, borderWidth: 0,
                        backgroundColor: "palegreen",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    <Icon name='search' size={35} color="#000000" style={{ marginTop: 10 }} />
                    <TextInput
                        placeholder="Search ID"
                        inlineImageLeft='search'
                        onChangeText={(inputUserId) => setInputUserId(inputUserId)}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 250, marginTop: 10,
                        marginBottom: 10,
                        backgroundColor: "red", //#FF5733
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 70,
                    }}
                    onPress={() => { searchUser() }}
                >
                    <Text>Search-ID</Text>
                </TouchableOpacity>

            </View>
            <View>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder="Mention Edit Name"
                    onChangeText={(userName) => setUserName(userName)}
                >{userName}</TextInput>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder="Mention Edit Age"
                    onChangeText={(userAge) => setUserage(userAge)}
                >{userAge}</TextInput>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 250, marginTop: 10,
                        marginBottom: 10,
                        backgroundColor: "red", //#FF5733
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 70,
                    }}
                    onPress={() => { updateUser() }}
                >
                    <Text>User-Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditScreen