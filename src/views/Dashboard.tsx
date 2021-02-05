import { View} from "react-native";
import { DashboardMenuItems } from "./DashboardMenu";
import React from "react";
import { AppBar } from "./Header";
import { FooterBar } from "./Footer";

export const Dashboard = () => {

    return (
        <View style={{flex:1}}>
            <View style={{flex:2}}>
                <AppBar/>
            </View>
            <View style={{flex:7}}>

                    <DashboardMenuItems/>

            </View>
            <View style={{flex:0}}>
                <FooterBar/>
            </View>

        </View>
    )
}
