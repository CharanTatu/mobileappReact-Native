import React from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'


function Wbview() {
    return (
        <WebView source={{ uri: "https://charan-tatu.netlify.app/" }} />
    )
}

export default Wbview