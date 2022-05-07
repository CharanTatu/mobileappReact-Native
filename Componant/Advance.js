import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
function Advance({ route, navigation }) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        GetApi();
    }, [])
    const GetApi = async () => {
        const result = await fetch(`https://mtrip-dynamic.herokuapp.com/adventures?city=${route.params.id}`)
        const data = await result.json();
        setCities(data);
    }
    return (
        <ScrollView>
            <View style={styles.centeredView}>
                <Text>
                    User selected city!: {route.params.id}
                    <Text>
                        {cities.map(({ name, image, id }) => {
                            return (
                                <View key={id}>
                                    <Text>{name}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('AddvanceDetails', { id })}>
                                        <Image source={{ uri: image }} style={styles.itemre} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </Text>
                </Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    itemre: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        resizeMode: 'contain',
        height: 150,
        width: 350,
    }
})

export default Advance
