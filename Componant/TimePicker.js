import React, { useState } from 'react';
import { View, Button, SafeAreaView, StyleSheet, Text, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TimePicker() {
    const [mydate, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setShow(Platform.OS === "android")
        setDate(currentDate);
        let tempDate = new Date(currentDate)
        let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(fdate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>{text}</Text>
                <View>
                    <Button onPress={() => showMode('date')} title="Your Time Picker" />
                </View>
                {show && (
                    <DateTimePicker
                        value={mydate}
                        mode={mode}
                        display="default"
                        onChange={changeSelectedDate}
                    />
                )}
                <TextInput placeholder='Data'>{text}</TextInput>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});