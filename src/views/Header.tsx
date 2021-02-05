import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {styles, systemColor} from "../styles/style";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import { PersistenceController } from "../controllers/PersistenceController";
import { PersistenceModel } from "../models/PersistenceModel";
import { modelFromCalenderItems } from "./Content";

export const AppBar=()=>{
    const persistenceModel=new  PersistenceModel()
    const persistenceController=new PersistenceController(persistenceModel)
     persistenceController.createTable()


    return(<SafeAreaView style={[styles.appBarContainer]}>
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

    <TouchableOpacity onPress={()=>{
        console.log(modelFromCalenderItems.getTag())
        persistenceController.createUser([
            0,
            modelFromCalenderItems.getFirstName(),
            modelFromCalenderItems.getLastName(),
            modelFromCalenderItems.getEmail(),
            modelFromCalenderItems.getPassword(),
            modelFromCalenderItems.getTag().toString(),
            modelFromCalenderItems.getCellNumber(),
            modelFromCalenderItems.getContact().toString(),
            modelFromCalenderItems.getStart()+'',
            modelFromCalenderItems.getEnd()+'',
            modelFromCalenderItems.getMonth(),
            modelFromCalenderItems.getDay(),
            modelFromCalenderItems.getTask().toString(),
            modelFromCalenderItems.getDayName(),
            modelFromCalenderItems.getAddress().toString(),
            modelFromCalenderItems.getTelephone(),
            modelFromCalenderItems.getDate()+'',
            modelFromCalenderItems.getLocation(),
            modelFromCalenderItems.getLongitude(),
            modelFromCalenderItems.getLatitude(),
            modelFromCalenderItems.getLatitudeDelta(),
            modelFromCalenderItems.getLongitudeDelta(),
            modelFromCalenderItems.getIsActive(),
            modelFromCalenderItems.getIsNotify()
        ]);
        //persistenceController.searchById('',[])
    }}>
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
