import React from 'react'
import { View, Text } from 'react-native'

function Getdata1(props) {
    const { description } = props.post;
    return (
        <View>
            <Text>
                {description}
            </Text>
        </View>
    )
}

export default Getdata1