import {
    Alert,
    FlatList,
    Modal,SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import {Picker} from  '@react-native-community/picker'
import {styles, systemColor} from "../styles/style";
import React, { useEffect, useState } from "react";
import  {FontAwesome}  from "@expo/vector-icons";
import {
    reduxDispatch,
    reduxReduce, reduxSubscribe,
} from "../models/ReduxModel";
import { UserController } from "../controllers/userController";
import { UserModel } from "../models/UserModel";
import { PickTime } from "./PickTime";
import { Dates, DayName, Months } from "./Calender";





//App bar


// System time viewer



// Dashboard menus container
export const CalenderItems=()=>{


    const [isCalendar,setIsCalendar]=useState(true);
    const [isLog,setIsLog]=useState(false);
    const [isModal,setIsModal]=useState(false);
    const [modalTask,setIModalTask]=useState('');
    const [visible,setVisible]=useState(true) ;
    const [selectedValue,setSelectedValue]=useState('Task send to') ;
    const [isEditable,setIsEditable]=useState(true)

    return (

        <SafeAreaView>
            <PickTime/>
            <Months/>
            <DayName/>
            <Dates/>

        </SafeAreaView>
            )
}

