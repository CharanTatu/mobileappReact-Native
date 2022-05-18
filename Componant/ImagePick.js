import React, { useState } from "react";
import { Button, PermissionsAndroid, StatusBar, StyleSheet, View, Image, } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const ImagePick = () => {
    const [imageUri, setImageUri] = useState("java");
    const requestCameraPermission = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo'
            },
            // includeBase64: true
        }

        launchImageLibrary(options, responce => {
            console.log("respone==========>", responce);
            if (responce.didCancel) {
                console.log("user cancle");
            }
            else if (responce.error) {
                console.log("error");
            }
            else if (responce.CustomButton) {
                console.log("console button");
            }
            else {
                const result = responce.assets;
                const result1 = result.map((user) => { return user.uri });
                const final = result1.toString();
                setImageUri(final);
            }
        });

    };
    return (
        <View style={styles.container}>
            <Button title="capture photo" onPress={requestCameraPermission} />
            <Image source={{ uri: `${imageUri}` }} style={{
                resizeMode: 'contain',
                backgroundColor: "aqua",
                padding: 100,
                marginVertical: 100,
                resizeMode: 'contain',
                borderColor: 'black',
                borderRadius: 120,
                borderWidth: 1,
                justifyContent: 'center'
            }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    item: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default ImagePick;