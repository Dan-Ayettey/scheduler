import {Text, TouchableOpacity, View } from "react-native";
import {styles, systemColor} from "../styles/style";
import {FontAwesome} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { PersistenceController } from "../controllers/PersistenceController";
import { modelFromCalenderItems } from "./Content";
import { Auth } from "./Auth";

let isLogOut=true;
export let setLogout =(logOut:boolean)=>{
    isLogOut=logOut
}
export const  getIsLogout=()=>{
    return isLogOut
}
export const AppBarItems=()=>{

    setLogout(true)

    return(
        <View>


         </View>
    )
}
export const AppBar=()=>{
    const  [isLogin ,setIsLogin]=useState(getIsLogout())
    useEffect((() => {
        console.log(getIsLogout(),899)
    }))


    return(
        <View>
             <Bar/>
    </View>
    )
}

export const Bar=()=>{

    const persistenceController=new PersistenceController('scheduler');
    persistenceController.createTable();

    const [isMenu,setIsMenu]=useState(true);
    const  [isLogout,setIsLogout]=useState(true)
    const  [isItems,setIsItem]=useState(true)
    /*
  {isMenu?    <ScrollView style={styles.appBarContainerMenuItems} showsHorizontalScrollIndicator={false}
                                        scrollEnabled={true} showsVerticalScrollIndicator={false}>

                    <TouchableOpacity onPress={() => {
                        setIsLogout(false);
                        setIsItem(false);
                        setIsMenu(false);
                    }}>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>
                            <FontAwesome size={16} name={'sign-out'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                            style={styles.appBarContainerMenuItemsIconTitle}>Log out</Text>
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.appBarContainerMenuItemsIconTitle}>
                                <FontAwesome size={16} name={'user'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                                style={styles.appBarContainerMenuItemsIconTitle}>profile</Text>
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>
                            <FontAwesome size={16} name={'cog'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                            style={styles.appBarContainerMenuItemsIconTitle}>Settings</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>
                            <FontAwesome size={16} name={'info'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                            style={styles.appBarContainerMenuItemsIconTitle}>Help</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>
                            <FontAwesome size={16} name={'info-circle'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                            style={styles.appBarContainerMenuItemsIconTitle}>about</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>
                            <Text style={styles.appBarContainerMenuItemsIcon}/> <Text
                            style={styles.appBarContainerMenuItemsIconTitle}> </Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>:null}

   {isLogout?<View >
                    <View style={{flex:2}}>
                        <AppBar/>
                    </View>
                    <View style={{flex:7}}>

                        <DashboardMenuItems/>

                    </View>
                    <View style={{flex:0}}>
                        <FooterBar/>
                    </View>

                </View>:null}

     */
    return(


            <View >

                {  isLogout ? <View style={[styles.appBarContainerItems,styles.appBarContainer]}>

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

                        persistenceController.createUser([
                            0,
                            modelFromCalenderItems.getFirstName(),
                            modelFromCalenderItems.getLastName(),
                            modelFromCalenderItems.getEmail(),
                            modelFromCalenderItems.getPassword(),
                            modelFromCalenderItems.getTag().toString(),
                            modelFromCalenderItems.getCellNumber(),
                            modelFromCalenderItems.getContact().toString(),
                            modelFromCalenderItems.getStart() + '',
                            modelFromCalenderItems.getEnd() + '',
                            modelFromCalenderItems.getMonth(),
                            modelFromCalenderItems.getDay(),
                            modelFromCalenderItems.getTask().toString(),
                            modelFromCalenderItems.getDayName(),
                            modelFromCalenderItems.getAddress().toString(),
                            modelFromCalenderItems.getTelephone(),
                            modelFromCalenderItems.getDate() + '',
                            modelFromCalenderItems.getLocation(),
                            modelFromCalenderItems.getLongitude(),
                            modelFromCalenderItems.getLatitude(),
                            modelFromCalenderItems.getLatitudeDelta(),
                            modelFromCalenderItems.getLongitudeDelta(),
                            modelFromCalenderItems.getIsActive(),
                            modelFromCalenderItems.getIsNotify()
                        ],((isOk, msg) => {

                        }));
                        //persistenceController.searchById('',[])
                    }}>
                        <Text style={[styles.appBarIcon,styles.save]}>
                            Save
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{

                        !isMenu ? setIsMenu(true):setIsMenu(false)
                    }}>
                        <FontAwesome  size={24} style={[styles.appBarIcon,styles.bar]} name={'bars'} color={systemColor.color} />
                    </TouchableOpacity>


                </View>   :<Auth callback={((isOk, userData) => {

                })}/>}


            </View>


    )
}
