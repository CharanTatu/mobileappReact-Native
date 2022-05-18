import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
function EditScreen() {
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
                    placeholder="Mention ID"
                />
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder="Mention Edit Name"
                />
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder="Mention Edit Age"
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
                >
                    <Text>User-Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditScreen