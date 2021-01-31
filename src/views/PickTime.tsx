// Time inputs
import { UserModel } from "../models/UserModel";
import { UserController } from "../controllers/userController";
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/style";
export const checkTime=(text:string,timeType:string)=>{
     if(timeType==='hour'){
         return  parseInt(text)>24? Alert.alert('Input must not be greater than 24'):1
     }else if (timeType==='minute'){
         return  parseInt(text)>60? Alert.alert('Input must not be greater than 60'):1
     }else {
         Alert.alert('Check your time type must be hour or minutes')
     }


}
export const PickTime= ()=>
{
    const model=new UserModel()
    const userController=new UserController(model)
    const [end,setEnd]=useState({minutes:'',hour:''})
    const [start,setStart]=useState({minutes:'',hour:''})

    return (
        <SafeAreaView>

            <View style={[styles.PickTimeContainer]}>

                <Text style={styles.end}>{'Start'}</Text>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text,'hour')
                    if(isValid){
                        setStart({minutes: start.minutes, hour: text})
                        userController.setStart(start)

                    }


                })} value={start.hour} autoCorrect={false} maxLength={2} style={styles.textInTime} placeholder="hour"/>

                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text,'minute')
                    if(isValid){
                        setStart({minutes: text, hour: start.hour})
                        userController.setStart(start)
                    }
                })} value={start.minutes} autoCorrect={false} style={styles.textInTime}  placeholder={'minute'}  maxLength={2}/>
                <Text style={styles.end}>{'End'}</Text>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text,'hour')
                    if(isValid){
                        setEnd({minutes: end.minutes, hour: text})
                        userController.setEnd(end)
                    }
                })} value={end.hour} autoCorrect={false} style={styles.textInTime} placeholder="hour" maxLength={2}/>
                <TextInput keyboardType={'phone-pad' ||'number-pad' } onChangeText={(text => {
                    const isValid=checkTime(text,'minute')
                    if(isValid){
                        setEnd({minutes: text, hour: end.hour})
                        userController.setEnd(end)
                    }
                })} value={end.minutes} autoCorrect={false} style={styles.textInTime}  placeholder={'minute'}  maxLength={2}/>

            </View>

        </SafeAreaView>
    )
}
