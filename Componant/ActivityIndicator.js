import React, { useState } from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native';

function ActivityIndicators() {
    const [show, setShow] = useState(false)
    const [citys, setCitys] = useState([]);

    const onpress = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false)
            alert("wlcome user");
            getData();
        }, 3000)
    }
    const getData = async () => {
        const result = await fetch("https://mtrip-dynamic.herokuapp.com/cities");
        const data = await result.json();
        console.log("data city====>", data)
        setCitys(data);
    }
    return (
        <View>
            <ActivityIndicator size="large" animating={show} />
            <View>
                <Button title='indicator' color="red" onPress={onpress} />

            </View>
        </View>
    )
}

export default ActivityIndicators