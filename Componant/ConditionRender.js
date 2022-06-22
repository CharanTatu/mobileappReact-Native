import React, { useState } from 'react'
import { View, Text, Modal, Pressable, Button } from 'react-native'
function ConditionRender() {

    const [viewData, setViewData] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={viewData}
            >
                <Text>
                    Hello User!!
                </Text>
            </Modal>
            <Pressable
                onPress={() => setViewData(true)}
            >
                <Text >Show Citys</Text>
            </Pressable>
        </View>
    )
}

export default ConditionRender