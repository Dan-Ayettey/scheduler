import {
    Alert,
    Dimensions,
    Modal,
    SafeAreaView, ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import { styles, systemColor } from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";
import React, { useState } from "react";
import { CalenderItems} from "./Content";
import {  ActivitiesLog } from "./Activities";
import { FooterBar } from "./Footer";
import { Bar } from "./Header";



export const DashboardMenuItems=function (props:any) {
    {/*Mean menu item*/}

    const [isCalendar,setIsCalendar]=useState(true);
    const [isLog,setIsLog]=useState(false);
    const [isModal,setIsModal]=useState(false);
    const [modalTask,setIModalTask]=useState('');
    const [visible,setVisible]=useState(true) ;
    const [selectedValue,setSelectedValue]=useState('Task send to') ;
    const [isEditable,setIsEditable]=useState(true)
    const {width,height}=Dimensions.get('window')
    return (

    <View >

                <View style={[styles.dashboardMenuItemsContainer]}>

                    <TouchableOpacity onPress={()=>{
                        setIsModal(true);
                        setVisible(true)
                    }} style={styles.mainItem}>
                        <FontAwesome  color={systemColor.backgroundColor} size={55} name={'plus-square-o'}/>
                    </TouchableOpacity>
                    <Modal style={{display:"none"}}
                           animationType="slide"
                           transparent={true}
                           visible={visible}

                           onRequestClose={() => {
                               Alert.alert("Close The task editor.");
                           }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text>{'Task name                                                                  '}</Text>
                                <TextInput placeholder={'Task name'}  style={[styles.modalText]} onChangeText={(value)=>{
                                    setIModalTask(value)
                                    props.userController.setTask([{taskName:value}])
                                }} value={modalTask}/>

                                <Text>{'Task to                                                                '}</Text>
                                <View style={styles.taskTo}>
                                    <Picker  style={[styles.modalText]} onValueChange={(value)=>{
                                        setSelectedValue(''+value)
                                        props.userController.setTask([{taskName:value}])
                                    }} selectedValue={selectedValue}>
                                        {['Dan','Daneil','Dan','Daneil'].
                                        map((value, index) =>  (<Picker.Item label={value}  key={index} value={value}/>))}

                                    </Picker>
                                    <TouchableOpacity >
                                        <FontAwesome name={'plus'} size={20} color={systemColor.backgroundColor}/>
                                    </TouchableOpacity>
                                </View>

                                <Text>{'Enter comment                                                                 '}</Text>
                                <TextInput placeholder={'Comments'} multiline={true} style={[styles.modalText]} onChangeText={(value)=>{
                                    setIModalTask(value)
                                }} value={modalTask}/>
                                <View style={styles.modalButtons}>

                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor:  systemColor.backgroundColor  }}
                                        onPress={() => {
                                            setIsEditable(false)
                                            setVisible(!visible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor:  systemColor.backgroundColor  }}
                                        onPress={() => {
                                            setIsEditable(false)
                                            setVisible(!visible);
                                        }}
                                    >
                                        <Text  style={styles.textStyle}>Ok</Text>
                                    </TouchableHighlight></View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={()=>{
                        if(!isCalendar){
                            setIsLog(false);
                            setIsCalendar(true);
                        }else {
                            if(isLog){
                                setIsCalendar(false);
                            }else {
                                setIsCalendar(true);
                            }

                        }


                    }}>
                        <FontAwesome color={isCalendar ? 'crimson':systemColor.backgroundColor} style={styles.mainItem}  size={43} name={'calendar'}/>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>{

                        if(isCalendar){
                            setIsLog(true);
                            setIsCalendar(false);
                        }else {
                            setIsLog(false);
                        }
                    }}>
                        <FontAwesome   style={styles.mainItem} color={systemColor.backgroundColor} size={50} name={'list-alt'}/>
                    </TouchableOpacity>
                </View>
                {
                    isCalendar && !isLog ? <CalenderItems/> :null
                }

                {
                    isLog  && !isCalendar? <ActivitiesLog/> : isCalendar ? null:<ActivitiesLog/>
                }

    </View>
    )
}
