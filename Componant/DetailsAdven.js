import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, SafeAreaView, Button, Pressable } from 'react-native'
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker';
function DetailsAdven({ route, navigation }) {
    const [detailscity, setDetailscity] = useState([]);
    const [person, setPerson] = useState(0);
    const [name, setName] = useState("");
    // const [date, setDate] = useState("");
    //==============================================
    const [mydate, setDates] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [date, setDate] = useState("");
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setShow(Platform.OS === "android")
        setDates(currentDate);
        let tempDate = new Date(currentDate)
        let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setDate(fdate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    useEffect(() => {
        Getdata();
    }, [])
    const Getdata = async () => {
        const result = await axios.get(`https://mtrip-dynamic.herokuapp.com/adventures/detail?adventure=${route.params.id}`)
        setDetailscity(result.data);
    }
    const AddData = async () => {
        try {
            const response = await axios.post(
                "https://mtrip-dynamic.herokuapp.com/reservations/new",
                {
                    name,
                    date,
                    person,
                    adventure: route.params.id
                }
            );
            console.log("dataput======>", response);
            if (response.data.success) {
                alert("Add successful")
            }
            else {
                alert("data not add somthing issue")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.centeredView}>
            <ScrollView>
                <SafeAreaView >
                    <View style={{ backgroundColor: "greenyellow" }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name!"
                            value={name}
                            onChange={(e) => setName(e.nativeEvent.text)}
                        />
                        {/* <TextInput
                            style={styles.input}
                            placeholder="Pick A Data! dd/mm/yyyy"
                            value={date}
                            onChange={(e) => setDate(e.nativeEvent.text)}
                        /> */}
                        <View>
                            {show && (
                                <DateTimePicker
                                    value={mydate}
                                    mode={mode}
                                    display="default"
                                    onChange={changeSelectedDate}
                                />
                            )}
                            <Text
                                onPress={() => showMode('date')}
                                style={styles.input}
                                placeholder="Pick A Data! dd/mm/yyyy"
                            >Date {date}</Text>
                        </View>
                        <TextInput style={styles.input}
                            editable={false}
                            placeholder="Pick A Data! dd/mm/yyyy">
                            ₹ {detailscity.costPerHead} Per Head
                        </TextInput>
                        <TextInput
                            style={styles.input1}
                            placeholder="Persons"
                            value={person}
                            onChange={(e) => setPerson(e.nativeEvent.text)}
                        ></TextInput>
                        <Button title='Reserve' color="red" onPress={AddData} />
                    </View>
                </SafeAreaView>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>Place Name: {detailscity.name}{"\n"} {"\n"}</Text>
                    <Text style={{ color: "red" }}>{detailscity.subtitle} {"\n"} {"\n"}</Text>
                    <Text>{detailscity.content}</Text>
                    {/* <Image source={{ uri: detailscity.images }} style={styles.itemre} /> */}
                </Text>
                <Button title='Check Resrvation' color="red" onPress={() => navigation.navigate("reservation")} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    itemre: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        resizeMode: 'contain',
        height: 150,
        width: 350,
    },
    baseText: {
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        // color: "red"
    },
    input1: {
        height: 70,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})

export default DetailsAdven