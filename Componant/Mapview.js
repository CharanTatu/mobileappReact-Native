import React,{useEffect, useState } from 'react'
import { View,Text,StyleSheet,PermissionsAndroid} from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useRoute } from '@react-navigation/native';
function Mapview() {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [distance, setDistance] = useState(0);
    const [coordinates, setCoordinates] = useState([]);
    const route = useRoute();
    const { latlongstart, latlongend,startLocation,endLocation} = route.params;

    useEffect(() => {
      // Function to fetch directions from the Directions API
      const fetchDirections = async () => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&key=AIzaSyAgPcWRPdAnpQn3Rhbx1UDTQz49Ij2hzFc`
          );
          const data = await response.json();
  
          if (data.status === 'OK') {
            const route = data.routes[0];
            const { overview_polyline } = route;
            const decodedPoints = decodePolyline(overview_polyline.points);
            setCoordinates(decodedPoints);
          } else {
            console.log('Error fetching directions:', data.status);
          }
        } catch (error) {
          console.error('Error fetching directions:', error);
        }
      };
  
      fetchDirections();
    }, []);
    
    useEffect(() => {
            const requestLocationPermission = async () => {
              try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  {
                    title: 'Location Permission',
                    message: 'This app needs access to your location.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  }
                );
          
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  Geolocation.getCurrentPosition(
                    (position) => {
                      const { latitude, longitude } = position.coords;
                      console.log("latitude, longitude ",latitude, longitude )
                      setOrigin({ latitude:latlongstart.lat, longitude:latlongstart.lng });
                    },
                    (error) => {
                      console.error(error);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                  );
                } else {
                  console.log('Location permission denied');
                }
              } catch (err) {
                console.warn(err);
              }
            };
            requestLocationPermission();
           setDestination({ latitude: latlongend.lat, longitude: latlongend.lng });
      }, []);

      const decodePolyline = (encodedPoints) => {
        const points = [];
        let index = 0;
        let lat = 0;
        let lng = 0;
    
        while (index < encodedPoints.length) {
          let byte;
          let shift = 0;
          let result = 0;
    
          do {
            byte = encodedPoints.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
          } while (byte >= 0x20);
    
          const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
          lat += dlat;
    
          shift = 0;
          result = 0;
    
          do {
            byte = encodedPoints.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
          } while (byte >= 0x20);
    
          const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
          lng += dlng;
    
          points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
        }
    
        return points;
      };

    const calculateDistance = (origin, destination) => {
        const earthRadius = 6371; // in kilometers
        const latDiff = toRadians(destination.latitude - origin.latitude);
        const lonDiff = toRadians(destination.longitude - origin.longitude);
      
        const a =
          Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
          Math.cos(toRadians(origin.latitude)) *
            Math.cos(toRadians(destination.latitude)) *
            Math.sin(lonDiff / 2) *
            Math.sin(lonDiff / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;
      
        return distance;
      };
      
      const toRadians = (degrees) => {
        return (degrees * Math.PI) / 180;
      };
  return (
    <View style={{ flex: 1 }}>
    {origin && destination && (
      <>
        <MapView
          provider={"google"}
          style={[{flex:1}]}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          <Marker coordinate={origin} title="Origin" />
          <Marker coordinate={destination} title="Destination" />
          <Polyline
            coordinates={coordinates}
            strokeColor="#2b62f2"
            strokeWidth={5}
          />
        </MapView>
        <Text style={{ alignSelf: 'center', marginTop: 10 }}>
          Distance: {calculateDistance(origin,destination).toFixed(2)} km
        </Text>
      </>
    )}
  </View>
  )
}

export default Mapview
