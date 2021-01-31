import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles, systemColor } from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export const FooterBar=()=>{
    return(<SafeAreaView style={[styles.footerContainer]}>
        <View style={styles.appBarContainerItems}>
            <View style={styles.userActivities}>
                <TouchableOpacity>
                    <FontAwesome style={styles.appBarIcon} name={'user-circle-o'} size={22} color={systemColor.color} />
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity>
                    <FontAwesome  style={[styles.appBarIcon,styles.appBarIconMessageAlertUser]} name={'user-circle-o'} size={14} color={systemColor.color} />

                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome style={styles.appBarIcon} name={'bell'} size={15} color={systemColor.color} />

                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={[styles.appBarIcon,styles.save]}>
                    Save
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome  size={24} style={[styles.appBarIcon,styles.bar]} name={'bars'} color={systemColor.color} />
            </TouchableOpacity>


        </View>
    </SafeAreaView>)
}
