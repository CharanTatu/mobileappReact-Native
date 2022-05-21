import React, { useRef, useState } from "react";
import { Button, Text, View, SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native";
import DrawerLayout from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/Feather';
const Drawer = ({ navigation }) => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");

    const navigationView = () => {
        return (
            <View>
                <Button
                    color="mediumspringgreen"
                    title="Close drawer"
                    onPress={() => drawer.current.closeDrawer()}
                />
                <Button title="Product-List" color="gainsboro" onPress={() => navigation.navigate("getapi")}></Button>
                <Button title="Share-File" color="gainsboro" onPress={() => navigation.navigate("shareFile")}></Button>
                <Button title="PanResponder" color="gainsboro" onPress={() => navigation.navigate("panrespo")}></Button>
                <Button title="image-Pick" color="gainsboro" onPress={() => navigation.navigate("imagepic")}></Button>
                {/* <Button title="List" color="gainsboro" onPress={() => navigation.navigate("List")}></Button> */}
                <Button title="Trip-Adventures" color="deeppink" onPress={() => navigation.navigate("model")}></Button>
                <Button title="Net-Info" color="gainsboro" onPress={() => navigation.navigate("netinfo")}></Button>
                <Button title="pick" color="gainsboro" onPress={() => navigation.navigate("pick")}></Button>
                <Button title="Easing-Animation" color="gainsboro" onPress={() => navigation.navigate("EasingAnimation")}></Button>
                {/* <Button title="pick" color="gainsboro" onPress={() => navigation.navigate("timepick")}></Button> */}
                <Button title="Google-Map" color="gainsboro" onPress={() => navigation.navigate("GoogleMap")} />
                <Button title="Video-play" color="gainsboro" onPress={() => navigation.navigate("Video")} />
                <Button title="Log-Redux-!!" color="gainsboro" onPress={() => navigation.navigate("LogRedux")} />
                <Button title="SQlite-Operation" color="mediumspringgreen" onPress={() => navigation.navigate("SQlite-Operation")} />

            </View>
        )
    };

    return (
        <>
            <DrawerLayout
                drawerBackgroundColor='white'
                ref={drawer}
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={navigationView}
            >
                {/* <Button
                    title="Open drawer"
                    onPress={() => drawer.current.openDrawer()}
                /> */}
                <View style={{ flex: 1, alignItems: "stretch" }}>
                    <View style={{
                        height: 40, borderWidth: 0,
                        backgroundColor: "mediumspringgreen",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        <Icon name='menu' size={35} color="#000000"
                            onPress={() => drawer.current.openDrawer()}
                            style={{ marginLeft: 20 }}
                        />
                        <Text style={{
                            marginLeft: 110,
                            marginTop: 10
                        }}>Welcome!!</Text>
                    </View>

                </View>
            </DrawerLayout>
            <View>

            </View>
        </>
    );
};


export default Drawer;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


