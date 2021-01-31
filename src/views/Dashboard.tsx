import {  View } from "react-native";
import { styles } from "../styles/style";

import { DashboardMenuItems } from "./DashboardMenu";
import React from "react";

export const Dashboard = () => {
    return (
        <View style={styles.container}>
            <DashboardMenuItems/>
        </View>
    )
}
