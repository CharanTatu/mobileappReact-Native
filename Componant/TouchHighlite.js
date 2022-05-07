import React, { useState } from 'react'

import { View, Text, Button, TouchableHighlight } from 'react-native'
function TouchHighlite() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);
    return (
        <View>
            <TouchableHighlight onPress={onPress} >
                <Text style={{ justifyContent: "center", paddingHorizontal: 160, color: "red" }}>TouchHighlite</Text>
            </TouchableHighlight>
            <Text>{count}</Text>
        </View>
    )
}

export default TouchHighlite