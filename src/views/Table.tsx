import React, { useState } from "react";
import { Alert, Modal, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles, systemColor } from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";

export const TableRow = (props:{
    task: any;
    location: any;
    end: any;
    start: any;
    date: any;
}) => {


    const [modalTask,setIModalTask]=useState(props.task)
    const [selectedValue,setSelectedValue]=useState('Task send to') ;
    const [visible,setVisible]=useState(false) ;
    const [isEditable,setIsEditable]=useState(false)
    const [isEditableModal,setIsEditableModal]=useState(false)

    return (
        <View >

        <View style={styles.logHeader}>
            <TextInput editable={isEditable} placeholderTextColor={systemColor.colors.borderInherit} placeholder={props.date} style={styles.logTableData}/>
            <TextInput editable={isEditable} value={ props.start} style={styles.logTableData}/>
            <TextInput editable={isEditable} value={ props.end} style={styles.logTableData}/>
            <TextInput editable={isEditable} value= {props.location} style={styles.logTableData}/>

            <TouchableOpacity style={styles.logTableData} onPress={(event => {
                setVisible(true);

            })}>
               <FontAwesome name={'eye'}  size={20} color={systemColor.backgroundColor} />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert("Close The task editor.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>{'Task Type                                                                  '}</Text>
                        <TextInput placeholder={'Task name'}  style={[styles.modalText]} onChangeText={(value)=>{
                            setIModalTask(value)
                        }} value={modalTask}/>

                        <Text>{'Task to                                                                '}</Text>
                        <View style={styles.taskTo}>
                        <Picker  style={[styles.modalText]} onValueChange={(value)=>{
                            setSelectedValue(''+value)
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
                                style={{ ...styles.openButton, backgroundColor: systemColor.backgroundColor }}
                                onPress={() => {

                                    setIsEditableModal(true)
                                }}
                            >
                                <Text style={styles.textStyle}>Edit</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor:  systemColor.backgroundColor  }}
                                onPress={() => {
                                    setIsEditableModal(false)
                                    setVisible(!visible);
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor:  systemColor.backgroundColor  }}
                                onPress={() => {
                                    setIsEditableModal(false)
                                    setVisible(!visible);
                                }}
                            >
                                <Text  style={styles.textStyle} >Save</Text>
                            </TouchableHighlight></View>
                    </View>
                </View>
            </Modal>
            </View>
            <View style={[styles.logCrudContainer]}>
                <TouchableOpacity>
                    <Text style={styles.logCrudTool}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.logCrudTool}>
                        update
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.logCrudTool}>
                        remove
                    </Text>
                </TouchableOpacity>
                <Text  style={styles.logCrudTotalHours}><Text>Total hours: </Text>{6}{'hrs'}</Text>
            </View>

        </View>
    )

}

export const TableHeader = (props:{
    end: any;
    location: any;
    task: any;
    start: any;
    date: any;
}) => (
    <SafeAreaView style={styles.tableHeader}>
        <Text style={styles.tableHeaderData}>{props.date}</Text><Text style={styles.tableHeaderData}>{props.start}</Text>
        <Text style={styles.tableHeaderData}>{props.end}</Text>
        <Text style={styles.tableHeaderData}>{props.location}</Text><Text style={styles.tableHeaderData}>{props.task}</Text>
    </SafeAreaView>
)
