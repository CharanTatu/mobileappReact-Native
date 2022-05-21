import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, FlatList } from 'react-native'
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

    /////========================================Flat test
    let listItemView = (item) => {
        return (
            <View
                key={item.user_id}
                style={{ backgroundColor: 'palegreen', padding: 20 }}>
                <Text >Id: {item.id}</Text>
                <Text>Name: {item.name}</Text>
                <Text>AdventureName: {item.adventureName}</Text>
                <Text>Price: {item.price}</Text>
            </View>
        );
    };
    let listViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.2,
                    width: '100%',
                    backgroundColor: '#808080',
                    padding: 5
                }}
            />
        );
    };

    return (
        <View >
            {/* <Text>
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
                </Text> */}

            <FlatList
                data={reservedPlace}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
            />

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