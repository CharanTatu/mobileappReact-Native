import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { Picker } from '@react-native-picker/picker';
const Netinfo = () => {
    const [pic, setPic] = useState("java");
    const [netInfo, setNetInfo] = useState('');
    const [numbar, setNumber] = useState("")
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfo(
                state.details.ipAddress
            );
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const getNetInfo = () => {
        // To get the network state
        NetInfo.fetch().then((state) => {
            alert(
                `Connection type: ${state.type}
                  Is connected : ${state.isConnected}
                  IP Address: ${state.details.ipAddress}`
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    NetInfo data
                </Text>
                <Button title="Get-NetInfo" onPress={getNetInfo} />
                <Picker
                    selectedValue={pic}
                    style={styles.pick}
                    onValueChange={(itemValue, itemIndex) => setPic(itemValue)}

                >
                    <Picker.Item label="pick" value="java" />
                    <Picker.Item label="picker" value="js" />
                </Picker>
                <TextInput
                    style={styles.inputtext}
                    placeholder='Enter mobile number'
                    keyboardType="numeric"
                    value={numbar}
                    onChange={(e) => setNumber(e.nativeEvent.text)}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        // justifyContent: 'center',
    },
    pick: {
        height: 50,
        width: 150,
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        marginTop: 30,
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        paddingVertical: 20,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputtext: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Netinfo;