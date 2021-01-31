// Time inputs
import { UserModel } from "../models/UserModel";
import { UserController } from "../controllers/userController";
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/style";
export const checkTime=(text:string)=>{
    return  parseInt(text)>24? Alert.alert('Start input must not be greater than 24'):1

}
export const PickTime= ()=>
{
    const model=new UserModel()
    const userController=new UserController(model)
    const [end,setEnd]=useState(0)
    const [start,setStart]=useState('')
    return (
        <SafeAreaView>

            <View style={[styles.PickTimeContainer]}>

                <Text style={styles.end}>{'Start'}</Text>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text)
                    if(isValid){
                        setStart(text)
                        userController.setStart(text)
                    }


                })} value={start} autoCorrect={false} maxLength={2} style={styles.textInTime} placeholder="hour"/>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text)
                    if(isValid){
                        setStart(text)
                        userController.setStart(text)
                    }
                })} value={start} autoCorrect={false} style={styles.textInTime}  placeholder={'minute'}  maxLength={2}/>
                <Text style={styles.end}>{'End'}</Text>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text)
                    if(isValid){
                        setStart(text)
                        userController.setStart(text)
                    }
                })} value={start} autoCorrect={false} style={styles.textInTime} placeholder="hour" maxLength={2}/>
                <TextInput keyboardType={'phone-pad' ||'number-pad' } onChangeText={(text => {
                    const isValid=checkTime(text)
                    if(isValid){
                        setStart(text)
                        userController.setStart(text)
                    }
                })} value={start} autoCorrect={false} style={styles.textInTime}  placeholder={'minute'}  maxLength={2}/>

            </View>

        </SafeAreaView>
    )
}
