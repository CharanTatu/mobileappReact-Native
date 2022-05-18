import React, { useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import SQlite from 'react-native-sqlite-storage'
const db = SQlite.openDatabase({
    name: 'data'
})

function DeleteScreen() {
    const [inputid, setInputid] = useState(0);
    const DeleteUser = () => {
        if (inputid.length == 0) {
            alert("please Add Id")
        }
        else {
            db.transaction((tx) => {
                tx.executeSql(
                    'DELETE FROM  table_user where user_id=?',
                    [inputid],
                    (tx, res) => {
                        console.log("results======>", res.rowsAffected)
                        if (res.rowsAffected > 0) {
                            alert("User! Delete")
                        }
                        else {
                            alert("please insert valid id")
                        }
                    }
                )
            })
            // db.transaction((tx) => {
            //     tx.executeSql(
            //         'SELECT * FROM table_user',
            //         [],
            //         (tx, res) => {
            //             console.log("=====>", res.rows.item(1))
            //         }
            //     )
            // })
            alert("delete")
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                placeholder="Mention Delete ID"
                onChangeText={(inputid) => setInputid(inputid)}
            />
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
                onPress={DeleteUser}
            >
                <Text>User-Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DeleteScreen