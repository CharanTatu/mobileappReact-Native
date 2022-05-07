import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Picker } from 'react-native-picker/picker'
const data = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];
class Drawerlayout extends Component {
    state = { user: '' }
    updateuser = (user) => {
        this.setState({ user: user })
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    {data.map(({ title, data, id }) => {
                        return (
                            <View key={id}>
                                <Text>
                                    {title}
                                </Text>
                                <Text>
                                    {data}
                                </Text>
                            </View>
                        )
                    })}
                </ScrollView>
                <View>

                    {/* <Picker selectedValue={this.state.user} onValueChange={this.updateuser}
                    style={{ height: 50, width: 50, marginLeft: 150 }}>
                    <Picker.Item label="NYN" value=" NYN Khadse" />
                    <Picker.Item label="Vishal" value=" VISHAL patil" />
                </Picker>
                <Text style={styles.text}>{this.state.user}</Text> */}
                    <Text>
                        Hello
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

}
export default Drawerlayout;

const styles = StyleSheet.create(
    {
        text: {
            fontSize: 50,
            alignSelf: "center",
            color: "red"
        }
    }
)