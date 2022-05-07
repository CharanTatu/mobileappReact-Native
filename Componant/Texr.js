import React from 'react'
import { View, Text } from 'react-native'

const Devtec = (props) => {
    let name = "rana"
    return (<View>
        <Text>
            hello,{props.name}
        </Text>

    </View>)
}
function Texr() {
    return (
        <View>
            <Text>
                <Devtec name=" charan" />
            </Text>

        </View>
    )
}
export default Texr