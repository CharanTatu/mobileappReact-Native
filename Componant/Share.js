import React from 'react'
import { View, Text, Share, Button } from 'react-native'
function Shares() {
    const onPress = async () => {
        try {
            const result = await Share.share({
                message: "hello nyn this is native device"
            })
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log("done share")
                } else {
                    console.log("no share")
                }
            } else if (result.action === Share.dismissedAction) {

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <Button onPress={onPress} title="share" />
        </View>
    )
}

export default Shares