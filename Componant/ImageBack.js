import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
//we can use home screen this componant
const image = { uri: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg" };

const ImageBack = ({ navigation }) => (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text1}>Charan!!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.text}> Mobile Team</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 800

    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    text1: {
        color: "white",
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "bold",
    }
});

export default ImageBack;