import {
    Alert,
    Dimensions,
    Modal,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import { styles, systemColor } from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { CalenderItems} from "./Content";
import {  ActivitiesLog } from "./Activities";
import { Picker } from "@react-native-community/picker";


export const DashboardMenuItems=function (props:any) {

    const [isListActive,setIsListActive]=useState(false)
    useEffect(()=>{

        setIsListActive(props.dashboard.dashboard.isActive)
    })

    {/*Mean menu item*/}

    const [isCalendar,setIsCalendar]=useState(true);
    const [isLog,setIsLog]=useState(false);
    const [isModal,setIsModal]=useState(false);
    const [modalTask,setIModalTask]=useState('                                               ');
    const [visible,setVisible]=useState(true) ;
    const [selectedValue,setSelectedValue]=useState('Task send to') ;
    const [isEditable,setIsEditable]=useState(false)
    const {width,height}=Dimensions.get('window')
    return (

    <View >
        {

            <Modal style={[styles.modalView,{position:"absolute",zIndex:2,alignSelf:'center'}]}
                   animationType="slide"
                   transparent={true}
                   visible={true}

                   onRequestClose={() => {
                       Alert.alert("Close The task editor.");
                   }}
            >

                    <View style={styles.centeredView}>
                        <Text style={styles.modalTitle}>Task name</Text>
                        <TextInput placeholder={'Task name'}  style={[styles.modalTextName]} onChangeText={(value)=>{
                            setIModalTask(value)
                            props.userController.setTask([{taskName:value}])
                        }} value={modalTask}/>

                        <Text style={styles.modalTitle}>Task to</Text>
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

                        <Text style={styles.modalTitle}>Enter comment </Text>
                        <TextInput placeholder={'Comments'} multiline={true} style={[styles.modalTextArea]} onChangeText={(value)=>{
                            setIModalTask(value)
                        }} value={modalTask}/>
                        <View style={styles.modalButtons}>

                            <TouchableHighlight
                                style={[styles.openButton, {backgroundColor:  systemColor.backgroundColor  }]}
                                onPress={() => {
                                    setIsEditable(false)
                                    setVisible(!visible);
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.openButton, {backgroundColor:  systemColor.backgroundColor  }]}
                                onPress={() => {
                                    setIsEditable(false)
                                    setVisible(!visible);
                                }}
                            >
                                <Text  style={styles.textStyle}>Ok</Text>
                            </TouchableHighlight></View>
                    </View>

            </Modal>
        }

                <View style={[styles.dashboardMenuItemsContainer]}>


                    <TouchableOpacity  onPress={()=>{

                         setIsModal(true);
                        //setVisible(false)
                        //setIsCalendar(false)
                        //setIsLog(false)
                        //setIsEditable(false)
                    }} style={styles.mainItem}>
                        <FontAwesome  color={isEditable ? 'crimson':systemColor.backgroundColor} size={55} name={'plus-square-o'}/>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=>{
                        if(!isCalendar){
                            setIsLog(false);
                            setIsCalendar(true);
                            setIsEditable(false)
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

                    <TouchableOpacity disabled={!isListActive} onPress={()=>{

                        if(isCalendar){
                            setIsLog(true);
                            setIsCalendar(false);
                            setIsEditable(false)
                        }else {
                            setIsLog(false);
                        }
                    }}>
                        <FontAwesome   style={styles.mainItem} color={isLog ? 'crimson':systemColor.backgroundColor} size={50} name={'list-alt'}/>
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
