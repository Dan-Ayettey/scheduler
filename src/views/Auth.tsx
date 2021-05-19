import { Image, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { styles, systemColor } from "../styles/style";
import { showToastWithGravity } from "./PickTime";
import { PersistenceController } from "../controllers/PersistenceController";
import { UserModel } from "../models/UserModel";
import { UserController } from "../controllers/userController";
import { modelFromCalenderItems } from "./Content";
import { userModel } from "../../App";
export const checkNumber=(text:string)=>{

    if(text.match('\^[0-9]+$')){

        return true
    }else {
        if(Platform.OS==='android'){
            showToastWithGravity('Input must not be number')
        }else {
            alert('Input must not be number')
        }

        return  false

    }



}
export const Auth=(props:{callback: (isOk: boolean,userData:{})=>void})=>{

    const persistenceController=new PersistenceController('scheduler')
    const userModel=new UserModel()
    const userController=new UserController(userModel);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [isLoginVisible,setIsLoginVisible]=useState(true);
    const [isProfileVisible,setIsProfileVisible]=useState(false);
    const [cellNumber,setCellNumber]=useState('');
    const [calendarControllerState,setcalendarControllerState]=useState(modelFromCalenderItems);


    useEffect((() => {
        userController.setPassword(password)
        userController.setEmail(email)
        setcalendarControllerState(modelFromCalenderItems)
        userController.setCellNumber(cellNumber)
    }))

        return(

            <View>
                {
                    isLoginVisible ?
                        <ScrollView   scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                            <Text style={styles.loginHeading}>
                                Login and Schedule for free
                            </Text>
                            <View>
                                <Text style={styles.loginWith}>Login with</Text>

                                <View style={styles.loginWithContainer}>

                                    <TouchableOpacity  onPress={(text)=>{


                                    }} >


                                        <Text style={styles.loginTitle}><FontAwesome style={{color:systemColor.backgroundColor}} size={50} name={'google-plus-official'}/></Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity  onPress={(text)=>{

                                    }} >
                                        <Text style={styles.loginTitle}> <FontAwesome style={{color:systemColor.backgroundColor}} size={50} name={'facebook'}/></Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity  onPress={(text)=>{

                                    }} >
                                        <Text style={styles.loginTitle}><FontAwesome style={{color:systemColor.backgroundColor}} size={50} name={'apple'}/></Text>

                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={styles.loginInputsContainer}>
                                <TextInput style={styles.loginInput}  placeholder={'Email'} onChangeText={(text)=>{
                                    setEmail(text)

                                }}/>
                                <TextInput style={styles.loginInput} placeholder={'Password'} onChangeText={(text)=>{
                                setPassword(text)

                                }}/>
                                <TextInput keyboardType={"phone-pad" || "number-pad"} style={styles.loginInput} placeholder={'Or phone number'} onChangeText={(text)=>{
                                const isValid= checkNumber(text)

                                    if(isValid){
                                        setCellNumber(text)
                                        userController.setCellNumber(cellNumber)
                                    }else {
                                        setCellNumber(cellNumber)
                                        if(cellNumber.toString().length===1){
                                            setCellNumber('')
                                        }
                                    }
                                }} value={cellNumber.toString()}/>
                                <View style={styles.loginButtonContainer}>
                                    <TouchableOpacity  onPress={()=>{

                                     persistenceController.auth([userModel.getEmail(),userModel.getPassword()],(rows,isOk,msg)=>{
                                         if(rows.length>0 && isOk){
                                             props.callback(isOk,{modelFromCalenderItems})
                                             //setIsProfileVisible(isOk)

                                             if(calendarControllerState.getStart().hour.trim() !==''  || calendarControllerState.getEnd().hour.trim()!==''
                                                 ||calendarControllerState.getStart().minutes.trim()!=='' || calendarControllerState.getEnd().minutes.trim()!=='') {

                                                 persistenceController.getAllTaskData((rows => {
                                                     const length=rows.length===0? rows.length:rows.length
                                                     console.log(rows)
                                                     persistenceController.createTask([
                                                         length, 'danni.ayette@gmail.com','Mother_30', {
                                                             'location': '',
                                                             'longitude': '',
                                                             'latitude': '',
                                                             'longitudeDelta': '',
                                                             'latitudeDelta': '',
                                                             'email': userModel.getEmail(),
                                                             'todayDate': calendarControllerState.getTodayDate(),
                                                             'start': calendarControllerState.getStart(),
                                                             'end': calendarControllerState.getEnd(),
                                                             'month': calendarControllerState.getMonth(),
                                                             'day': calendarControllerState.getDay(),
                                                             'dayName': calendarControllerState.getDayName(),
                                                             "date": {
                                                                 "date": calendarControllerState.getDay(),
                                                                 "month": calendarControllerState.getMonth(),
                                                                 "year": calendarControllerState.getYear()
                                                             }
                                                         }
                                                     ], (isOk, msg) => {
                                                         if(isOk){
                                                             alert(msg)
                                                         }else {
                                                             console.log(msg)
                                                         }

                                                     });


                                                 }))

                                             } else {
                                                 alert("Requires at list one start time or end" )
                                             }


                                         }else {
                                             props.callback(isOk,{})
                                             alert(msg)
                                         }



                                     })




                                    }}>
                                        <Text style={styles.loginButton} >Login</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        setIsLoginVisible(false)
                                    }}>
                                        <Text style={styles.loginButtonSignUp} >Sign up</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>



                        </ScrollView>
                        : <Register />}

            </View>

        )



}


 export const Register=()=>{
     const persistenceController=new PersistenceController('scheduler')
     const userModel=new UserModel()
     const userController=new UserController(userModel);
     const [cellNumber,setCellNumber]=useState('')
     const [tag,setTag]=useState('')
     const [firstName,setFirstName]=useState('')
     const [lastName,setLastName]=useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')


        const [isLoginVisible,setIsLoginVisible]=useState(true)
        const [isCreated,setIsCreated]=useState(true)
        useEffect(()=>{
            userController.setTag(tag)
            userController.setFirstName(firstName)
            userController.setLastName(lastName)
            userController.setEmail(email)
            userController.setPassword(password)
            userController.setCellNumber(cellNumber)

        })

     return(
            isLoginVisible ?
                <View style={{height:530,marginBottom:6}} >

                        <View style={styles.register}>
                            <Text style={styles.loginHeading}>
                                Sign up and Schedule for free
                            </Text>
                            <View>
                                <Text style={styles.loginWith}>Login with</Text>

                                <View style={styles.loginWithContainer}>

                                    <TouchableOpacity>


                                        <Text style={styles.loginTitle}><FontAwesome style={{color:systemColor.backgroundColor}} size={50} name={'google-plus-official'}/></Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.loginTitle}> <FontAwesome style={{color:systemColor.backgroundColor}} size={50} name={'facebook'}/></Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.loginTitle}><FontAwesome style={{color:systemColor.backgroundColor}} size={50} name={'apple'}/></Text>

                                    </TouchableOpacity>

                                </View>
                                <View>
                                    { isCreated?  <Image source={require('../assets/loading_24.gif')}/> : null}
                                </View>
                            </View>
                            <View style={styles.loginInputsContainer}>
                                <TextInput style={styles.loginInput} placeholder={'Tag name or company name'}  onChangeText={(text)=>{
                                   setTag(text)

                                }} value={tag}/>
                                <TextInput style={styles.loginInput} placeholder={'first name'}  onChangeText={(text)=>{
                                 setFirstName(text);

                                }} value={firstName}/>
                                <TextInput style={styles.loginInput} placeholder={'Last name'}  onChangeText={(text)=>{
                                   setLastName(text)


                                }} value={lastName}/>
                                <TextInput style={styles.loginInput} placeholder={'Email'}  onChangeText={(text)=>{
                                  setEmail(text)

                                }} value={email}/>
                                <TextInput style={styles.loginInput} placeholder={'Password'}  onChangeText={(text)=>{
                                  setPassword(text)

                                }} value={password}/>
                                <TextInput keyboardType={"phone-pad" || "number-pad"} style={styles.loginInput} placeholder={'Or phone number'}  onChangeText={(text)=>{
                                    const isValid= checkNumber(text)
                                    if(isValid){

                                        setCellNumber(text)
                                    }else {
                                        setCellNumber(cellNumber)
                                        if(cellNumber.toString().length===1){
                                            setCellNumber('')
                                        }
                                    }

                                }} value={cellNumber}/>

                                <View style={styles.loginButtonContainer}>
                                    <TouchableOpacity  onPress={()=>{

                                        const user=[
                                            0,
                                            userModel.getFirstName(),
                                            userModel.getLastName(),
                                            userModel.getEmail(),
                                            userModel.getPassword(),
                                            userModel.getTag().toString(),
                                            userModel.getCellNumber(),
                                            userModel.getContact().toString(),
                                            userModel.getStart()+'',
                                            userModel.getEnd()+'',
                                            userModel.getMonth(),
                                            userModel.getDay(),
                                            userModel.getTask().toString(),
                                            userModel.getDayName(),
                                            userModel.getAddress().toString(),
                                            userModel.getTelephone(),
                                            userModel.getDate()+'',
                                            userModel.getLocation(),
                                            userModel.getLongitude(),
                                            userModel.getLatitude(),
                                            userModel.getLatitudeDelta(),
                                            userModel.getLongitudeDelta(),
                                            userModel.getIsActive(),
                                            userModel.getIsNotify()
                                        ]

                                        persistenceController.createUser(user,(isOk:Boolean,msg:string) =>{

                                            if(isOk){
                                                alert(msg)
                                                setIsLoginVisible(false)
                                            }else {
                                                alert(msg)
                                            }


                                        },);

                                        //showToastWithGravity('The email already exist, please try to login instead')
                                    }}>
                                        <Text style={styles.loginButton} >Submit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        setIsLoginVisible(false)
                                    }}>
                                        <Text style={styles.loginButtonSignUp} >Login</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>



                        </View>

                </View> :<Auth callback={((isOk, userData) => {

                })}/>
        )

    }

