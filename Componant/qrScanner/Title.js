import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const Greeting = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello-{props.data}</Text>
        </View>
    );
}

function Title() {
    const [name, setName] = useState("");

    useEffect(() => {
        devfun();
    }, [name]);

    const devfun = () => {
        setInterval(() => {
            changeName();
        }, 2000);
    };

    const changeName = () => {
        name ? setName("Team!!") : setName("User!!");
    };
    return (
        <View>
            <Greeting data={name} />
        </View>
    );
}
export default Title