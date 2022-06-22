import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Data = {
    markers: [
        {
            coordinate: {
                latitude: 45.524548,
                longitude: -122.6749817,
            },
            title: "Best Place",
            description: "This is the best place in Portland",
        },
        {
            coordinate: {
                latitude: 45.524698,
                longitude: -122.6655507,
            },
            title: "Second Best Place",
            description: "This is the second best place in Portland",
        },
        {
            coordinate: {
                latitude: 45.5230786,
                longitude: -122.6701034,
            },
            title: "Third Best Place",
            description: "This is the third best place in Portland",
        },
        {
            coordinate: {
                latitude: 45.521016,
                longitude: -122.6561917,
            },
            title: "Fourth Best Place",
            description: "This is the fourth best place in Portland"
        },
    ],
    region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
    },
};
function MapData() {
    const lat = AsyncStorage.getItem("latitude");
    const long = AsyncStorage.getItem("longitude");
    console.log("data=====", lat, long)


    return (
        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                // region={{
                //     latitude: 37.421998,
                //     longitude: -122.0840,
                //     latitudeDelta: 0.015,
                //     longitudeDelta: 0.0121,
                // }}
                region={Data.region}
            >
                <Marker coordinate={{ latitude: 45.52220671242907, longitude: -122.6653281029795 }}
                    pinColor={"red"} // any color
                    title="hello all suma team "
                    description='Portland location'
                // image={require('../assets/map-marker.png')}
                />
                {Data.markers.map((marker, index) => {
                    return (
                        <Marker key={index} coordinate={marker.coordinate} />
                    );
                })}
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