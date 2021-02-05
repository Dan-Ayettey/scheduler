import {Text, TouchableOpacity, View } from "react-native";
import { styles} from "../styles/style";
import React from "react";

export const FooterBar=()=>{
    return(

        <View style={[styles.appBarContainerItems,styles.footerContainer]}>



            <TouchableOpacity>
                <Text  style={[styles.appBarIcon,styles.bar]}>Chat</Text>
            </TouchableOpacity>


        </View>
    )
}
