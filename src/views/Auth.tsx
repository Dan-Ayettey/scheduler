import {ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { styles, systemColor } from "../styles/style";
import { Dashboard } from "./Dashboard";
import { showToastWithGravity } from "./PickTime";
import { PersistenceModel } from "../models/PersistenceModel";
import { PersistenceController } from "../controllers/PersistenceController";
import { UserModel } from "../models/UserModel";
import { UserController } from "../controllers/userController";
export const checkNumber=(text:string)=>{

    if(text.match('\^[0-9]+$')){

        return true
    }else {
        showToastWithGravity('Input must not be number')
        return  false

    }



}
export const Auth=()=>{
    const persistenceModel=new  PersistenceModel()
    const persistenceController=new PersistenceController(persistenceModel)
    const userModel=new UserModel()
    const userController=new UserController(userModel);

    const [isLoginVisible,setIsLoginVisible]=useState(true);
    const [isProfileVisible,setIsProfileVisible]=useState(false);
    const [cellNumber,setCellNumber]=useState('');

    if(!isProfileVisible){
        return(

            <View>
                {
                    isLoginVisible ?
                        <ScrollView  style={[styles.loginContainer,styles.loginItems]} scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
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

                                }}/>
                                <TextInput style={styles.loginInput} placeholder={'Password'} onChangeText={(text)=>{

                                }}/>
                                <TextInput keyboardType={"phone-pad" || "number-pad"} style={styles.loginInput} placeholder={'Or phone number'} onChangeText={(text)=>{
                                const isValid= checkNumber(text)
                                    if(isValid){
                                        setCellNumber(text)
                                    }else {
                                        setCellNumber(cellNumber)
                                        if(cellNumber.toString().length===1){
                                            setCellNumber('')
                                        }
                                    }
                                }} value={cellNumber.toString()}/>
                                <View style={styles.loginButtonContainer}>
                                    <TouchableOpacity  onPress={()=>{

                                        setIsProfileVisible(true)
                                        console.log(isProfileVisible)
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
                        : <Register userModel={userModel} userController={userController} persistenceController={persistenceController}/>}

            </View>

        )
    }else {
   return(
       <View style={[styles.loginDashBoardContainer]}>
        <Dashboard/>
       </View>
     )
    }

}


 export const Register=(props:{
     persistenceController: PersistenceController;
     userController:UserController;
     userModel: UserModel;
 })=>{
     const [cellNumber,setCellNumber]=useState('')
     const [tag,setTag]=useState('')
     const [firstName,setFirstName]=useState('')
     const [lastName,setLastName]=useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')


        const [isLoginVisible,setIsLoginVisible]=useState(true)
        const [isCreated,setIsCreated]=useState(true)


     return(
            isLoginVisible ?
                <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

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
                            </View>
                            <View style={styles.loginInputsContainer}>
                                <TextInput style={styles.loginInput} placeholder={'Tag name or company name'}  onChangeText={(text)=>{
                                   setTag(text)
                                    props.userController.setTag(text)
                                }} value={tag}/>
                                <TextInput style={styles.loginInput} placeholder={'first name'}  onChangeText={(text)=>{
                                 setFirstName(text);
                                    props.userController.setFirstName(text)
                                }} value={firstName}/>
                                <TextInput style={styles.loginInput} placeholder={'Last name'}  onChangeText={(text)=>{
                                   setLastName(text)
                                    props.userController.setLastName(text)

                                }} value={lastName}/>
                                <TextInput style={styles.loginInput} placeholder={'Email'}  onChangeText={(text)=>{
                                  setEmail(text)
                                    props.userController.setEmail(text)
                                }} value={email}/>
                                <TextInput style={styles.loginInput} placeholder={'Password'}  onChangeText={(text)=>{
                                  setPassword(text)
                                    props.userController.setPassword(text)
                                }} value={password}/>
                                <TextInput keyboardType={"phone-pad" || "number-pad"} style={styles.loginInput} placeholder={'Or phone number'}  onChangeText={(text)=>{
                                    const isValid= checkNumber(text)
                                    if(isValid){
                                        props.userController.setCellNumber(text)
                                        setCellNumber(text)
                                    }else {
                                        setCellNumber(cellNumber)
                                        if(cellNumber.toString().length===1){
                                            setCellNumber('')
                                        }
                                    }

                                }} value={cellNumber}/>
                                <View style={styles.loginButtonContainer}>
                                    <TouchableOpacity onPress={()=>{
                                        const user=[
                                            0,
                                            props.userModel.getFirstName(),
                                            props.userModel.getLastName(),
                                            props.userModel.getEmail(),
                                            props.userModel.getPassword(),
                                            props.userModel.getTag().toString(),
                                            props.userModel.getCellNumber(),
                                            props.userModel.getContact().toString(),
                                            props.userModel.getStart()+'',
                                            props.userModel.getEnd()+'',
                                            props.userModel.getMonth(),
                                            props.userModel.getDay(),
                                            props.userModel.getTask().toString(),
                                            props.userModel.getDayName(),
                                            props.userModel.getAddress().toString(),
                                            props.userModel.getTelephone(),
                                            props.userModel.getDate()+'',
                                            props.userModel.getLocation(),
                                            props.userModel.getLongitude(),
                                            props.userModel.getLatitude(),
                                            props.userModel.getLatitudeDelta(),
                                            props.userModel.getLongitudeDelta(),
                                            props.userModel.getIsActive(),
                                            props.userModel.getIsNotify()
                                        ]

                                         const isOk=   props.persistenceController.createUser(user);
                                        console.log(isOk)
                                        setIsLoginVisible(!isOk)
                                        if(isOk){



                                        }else {
                                            showToastWithGravity('The email already exist, please try to login instead')
                                        }


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

                </ScrollView> :<Auth/>
        )

    }

