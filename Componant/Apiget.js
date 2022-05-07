import React, { useState, useEffect, useRef } from 'react'
import {
    View, Text, ScrollView, Image, StyleSheet,
    StatusBar, Button, TouchableOpacity,
} from 'react-native'
// import Getdata1 from './Getdata1';


function Apiget() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        Getdata();
    }, [])
    const Getdata = async () => {
        try {
            const result = await fetch("https://fakestoreapi.com/products")
            const data = await result.json();
            setUser(data);

        } catch (error) {
            console.log("error api", error);
        }
    }
    const ImagePress = () => {
        alert('You Tapped on product!');
        // ToastAndroid.show("You are Clicke product Item!", ToastAndroid.CENTER);
    }
    const Imageonclick = (id) => {
        let cardata = user.filter((user) => { return user.id === id })
        let data = cardata.map((use) => use.price);
        alert(` Card Price: Rs${data}`)
    }
    return (

        <ScrollView>
            <Text style={{ height: 30, color: "red" }}>Product List</Text>
            {user.map(({ title, image, id, category }) => {
                return (
                    <View style={styles.item} key={id} >
                        <Text style={{ height: 30, color: "green" }} >
                            Product Name: {title}
                        </Text>
                        <Text>{category}</Text>
                        <View>
                            <TouchableOpacity onPress={() => Imageonclick(id)}>
                                <Image source={{ uri: image }} style={styles.items} />
                            </TouchableOpacity>

                            <Button onPress={() => ImagePress(id)} title="Card" />

                        </View>
                    </View>
                )
            })}
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        resizeMode: 'contain'
    },
    items: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        resizeMode: 'contain',
        height: 150,
        width: 350,

    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

export default Apiget

