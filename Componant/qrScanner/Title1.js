import React, { useState, useEffect } from "react";
import Title from './Title'
import { View } from 'react-native'
const Title1 = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        intervalFunc();
    }, [name]);

    const intervalFunc = () => {
        setInterval(() => {
            changeName();
        }, 2000);
    };

    const changeName = () => {
        name === "Team!!" ? setName("Team!!") : setName("User!!");
    };
    return (
        <View>
            <Title data={name} />
        </View>
    );
};
export default Title1;