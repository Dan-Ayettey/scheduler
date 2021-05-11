// Time inputs
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    Text,
    TextInput,
    ToastAndroid,
    View
} from "react-native";
import { styles} from "../styles/style";
export const showToastWithGravity = (message:string) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
    );
};
export const checkTime=(text:string,timeType:string)=>{
    if(parseInt(text)>24 && timeType==='hour'){
             showToastWithGravity('Input must not be greater than 24')
             return  false
         }
    if (parseInt(text)>60 && timeType==='minute'){
          showToastWithGravity('Input must not be greater than 60')
             return false
     }
    return true
}
export const PickTime= (props:any)=> {
    const {width, height}=Dimensions.get('window')
    const isWidth=width<=488 && width!=280?{width:60}:{width:270}
    const [end,setEnd]=useState({hour:props.model.getEnd().hour,minutes:props.model.getEnd().minutes})
    const [start,setStart]=useState({hour:props.model.getStart().hour,minutes:props.model.getStart().minutes})
    const [visible,setVisibility]=useState(false)
    useEffect(()=>{
        props.userController.setStart(start)
        props.userController.setEnd(end)

        console.log( start,end)
    })
    return (
        <SafeAreaView>

            <View style={[styles.pickTimeContainer,width===280?{flexDirection:'column'}:{flexDirection:"row"}]}>

                <Text style={styles.end}>{'Start'}</Text>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={((text)=>{

                    const isValid=checkTime(text,'hour')
                    if(isValid){

                            setStart({hour: text.replace(/[^0-9]/g, ''),minutes: start.minutes
                            })

                        setVisibility(false)
                    }else {
                        setStart({ hour: start.hour,minutes: start.minutes
                        })
                        setVisibility(true)
                    }


                })
                } value={start.hour} autoCorrect={false} maxLength={2} style={[styles.textInTime,isWidth]} placeholder="hour"/>

                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text,'minute')
                    if(isValid){
                        setStart({hour: start.hour,minutes: text.toString().replace(/[^0-9]/g, '')})
                        setVisibility(false)
                        console.log(start)

                    }else {
                        setVisibility(true)
                        setStart({ hour: start.hour,minutes: start.minutes,})
                    }
                })} value={start.minutes} autoCorrect={false} style={[styles.textInTime,isWidth]}  placeholder={'minute'}  maxLength={2}/>
                <Text style={styles.end}>{'End'}</Text>
                <TextInput keyboardType={'phone-pad' ||'number-pad'} onChangeText={(text => {
                    const isValid=checkTime(text,'hour')
                    if(isValid){
                        setEnd({hour:
                                text.toString().replace(/[^0-9]/g, ''),minutes: end.minutes})
                        setVisibility(false)
                        console.log(end)

                    }else {
                        setEnd({minutes: end.minutes, hour:end.hour})
                        setVisibility(true)
                    }
                })} value={end.hour} autoCorrect={false} style={[styles.textInTime,isWidth]} placeholder="hour" maxLength={2}/>

                <TextInput keyboardType={'phone-pad' ||'number-pad' } onChangeText={(text => {
                    const isValid=checkTime(text,'minute')
                    if(isValid){
                        setEnd({hour: end.hour,minutes: text.toString().replace(/[^0-9]/g, '') })
                        props.userController.setEnd(end)
                        setVisibility(false)

                    }else {
                        setEnd({hour: end.hour,minutes: end.minutes })
                        props.userController.setEnd(end)
                        setVisibility(true)
                    }
                })} value={end.minutes} autoCorrect={false} style={[styles.textInTime,isWidth]}  placeholder={'minute'}  maxLength={2}/>


            </View>

        </SafeAreaView>
    )

}

