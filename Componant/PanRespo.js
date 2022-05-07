import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, Image } from "react-native";


const PanRespo = () => {
    const [viewModel, setViewModel] = useState(false);
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;

    return (

        <View style={styles.container}>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}
            >
                <Image source={{ uri: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg" }} style={styles.box} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 120
    }
});

export default PanRespo;