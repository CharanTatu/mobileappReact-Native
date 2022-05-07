import React, { useState } from 'react'
import { View, TextInput, Text, Button, ToastAndroid, StyleSheet } from 'react-native'
function Handlingtext() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUser] = useState([]);
    console.log("data", users)
    const adduser = () => {
        ToastAndroid.show("Add user data!", ToastAndroid.CENTER);
        const user = {
            name,
            email,
        }
        setUser([...users, user])
        setName("")
        setEmail("")
    }

    return (

        <View style={{ padding: 10 }}>

            <TextInput placeholder='Name' style={styles.item}
                value={name} onChange={(e) => setName(e.nativeEvent.text)}>
            </TextInput>

            <TextInput placeholder='Email'
                style={styles.item}
                value={email} onChange={(e) => setEmail(e.nativeEvent.text)}>
            </TextInput>
            <Button title='Submit' color="#f194ff" onPress={adduser} />

            <View>
                {
                    users.map(({ name, email, id }) => {
                        return (
                            <View key={id}>
                                <Text >
                                    User Name {name}
                                </Text>
                                <Text>
                                    User Email {email}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>

        </View>


    )
}
const styles = StyleSheet.create({
    item: {
        borderColor: "gray",
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
    }
})

export default Handlingtext