import {View } from "react-native";
import React from "react";
import { styles } from "../styles/style";
import { Dashboard } from "./Dashboard";
export const InitScene=()=>{
    return(


            <View style={styles.initSceneContainer}>
               <Dashboard/>
            </View>

    )
}
