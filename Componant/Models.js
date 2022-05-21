import React, { useEffect, useState } from "react";
import {
    Modal, StyleSheet, Text, Pressable, View, Image, ActivityIndicator,
    ScrollView, TouchableOpacity, Button
} from "react-native";

const Models = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [citys, setCitys] = useState([]);

    const indicat = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }
    useEffect(() => {
        indicat();
        getData();
    }, [])
    const getData = async () => {
        const result = await fetch("https://mtrip-dynamic.herokuapp.com/cities");
        const data = await result.json();
        setCitys(data);
    }
    return (
        <View style={styles.centeredView}>
            <Button title="If User Web-View display" color="mediumspringgreen" onPress={() => navigation.navigate("webview")}></Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {citys.map(({ city, id }) => {
                            return (
                                <View key={id}>
                                    <Text>{city}</Text>
                                </View>
                            )
                        })}

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Citys</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Citys</Text>
            </Pressable>
            <ActivityIndicator size="large" animating={show} />
            <ScrollView>
                {citys.map(({ city, image, id }) => {
                    return (
                        <View key={id}>
                            <Text>
                                {city}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Addvance', { id })}>
                                <Image source={{ uri: image }} style={styles.itemre} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    itemre: {
        backgroundColor: "mediumspringgreen",
        padding: 20,
        marginVertical: 8,
        resizeMode: 'contain',
        height: 150,
        width: 350,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Models;