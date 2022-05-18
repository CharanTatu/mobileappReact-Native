import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, View, Text, Button, TextInput, Image, } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ImagePicker from 'react-native-image-crop-picker';
import { Picker } from '@react-native-picker/picker';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from "react-native-push-notification";
const Netinfo = () => {
    const [pic, setPic] = useState("java");
    const [netInfo, setNetInfo] = useState('');
    const [numbar, setNumber] = useState("")
    const [images, setImages] = useState("jav");
    const [locations, setLocation] = useState("");
    const [longitude, setLongitude] = useState("")
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
    const Cropfunction = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            // console.log(image);
            setImages(image.path)
        });
    }

    const Geoloacationdata = () => {
        Geolocation.getCurrentPosition(info => {
            // console.log("datas===", info)
            setLocation(info.coords.latitude);
            setLongitude(info.coords.longitude)
            AsyncStorage.setItem("latitude", JSON.stringify(info.coords.latitude))
            AsyncStorage.setItem("longitude", JSON.stringify(info.coords.longitude))
        });

    }

    useEffect(() => {
        createChannel();
    }, [])

    const createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "test-data",
                channelName: "Test-Data",
            }
        )
    }
    const handleNotify = () => {
        // PushNotification.localNotification({
        //     channelId: "test-data",
        //     title: "hello team native"
        // })
        PushNotification.localNotificationSchedule({
            message: "My Notification Message",
            channelId: "test-data",
            title: "hello team native",
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
            allowWhileIdle: false,
            repeatTime: 1,

        }
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    NetInfo data
                </Text>
                <Button title="Get-NetInfo" onPress={getNetInfo} />
                <Button title='Click crop' onPress={Cropfunction} />
                <Button title='GeoLocation' onPress={Geoloacationdata} />
                <Button title="Local-Notify" onPress={handleNotify} />
                <Text>
                    latitude:={locations} {"\n"}
                    longitude:={longitude}
                </Text>
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
                <Image source={{ uri: images }} style={{
                    height: 120,
                    width: 120,
                    marginLeft: 140
                }} />
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
