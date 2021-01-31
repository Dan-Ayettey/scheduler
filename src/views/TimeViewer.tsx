import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "../styles/style";

export const TimeViewer=()=> {
    const [time,setTime]=useState('');
    setTimeout((sec)=> sec===1000 ? clearInterval(this):setTime(calendar.localTime()),1000)
    return (
        <SafeAreaView style={styles.sysTimeContainer}>
            <Text style={styles.sysTime}>{time}</Text>

        </SafeAreaView>
    )
}
