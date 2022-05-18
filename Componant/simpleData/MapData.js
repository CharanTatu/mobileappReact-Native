import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
function MapData() {
    const lat = AsyncStorage.getItem("latitude");
    const long = AsyncStorage.getItem("longitude");
    console.log("data=====", lat._W, long)


    return (
        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 37.421998,
                    longitude: -122.0840,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker coordinate={{ latitude: 37.421998, longitude: -122.4324 }}
                    pinColor={"red"} // any color
                    title="hello"
                    description='pune location'
                    image={require('../assets/map-marker.png')}
                />
            </MapView>
            <View
                style={{
                    height: 70, borderWidth: 0,
                    backgroundColor: "lightblue",
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                <Text style={{ marginLeft: 10 }}>
                    User! current location:
                </Text>
                <Text style={{ marginLeft: 180 }}>
                    City!
                </Text>
            </View>
        </View>
    )
}

export default MapData

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        height: 500,
        width: 500,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})