import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
function Reservation() {

    const [reservedPlace, setReservedPlace] = useState([]);

    const reservePlace = async () => {
        const response = await axios.get(
            "https://mtrip-dynamic.herokuapp.com/reservations"
        );
        setReservedPlace(response.data);
    };
    useEffect(() => {
        reservePlace();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>
                    <Text style={styles.titleText}>Reservation List {"\n"}</Text>
                    {
                        reservedPlace.map((place) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={styles.titleText}>
                                        {"\n"} Booking Name = {place.name} {"\n"}
                                    </Text>
                                    <Text style={styles.titleText}>
                                        Transaction ID = {place.id}  {"\n"}
                                    </Text>
                                    <Text style={styles.titleText}>
                                        placeName = {place.adventureName},  Price = {place.price}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </Text>
            </ScrollView>
        </View>
    )
}

export default Reservation
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 22
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    card: {
        backgroundColor: "red",
        padding: 10,
        marginVertical: 8,
        // marginHorizontal: 10,
        height: 180,
        width: 450,
    }

})