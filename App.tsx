import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Auth, Register } from "./src/views/Auth";
import { styles, systemBar, systemColor } from "./src/styles/style";
import { AppBar, Bar } from "./src/views/Header";
import { FontAwesome } from "@expo/vector-icons";
import { modelFromCalenderItems } from "./src/views/Content";
import { PersistenceModel } from "./src/models/PersistenceModel";
import { PersistenceController } from "./src/controllers/PersistenceController";
import { DashboardMenuItems } from "./src/views/DashboardMenu";
import { FooterBar } from "./src/views/Footer";
import { Dashboard } from "./src/views/Dashboard";
import { UserModel } from "./src/models/UserModel";
import { UserController } from "./src/controllers/userController";

function Home() {
    return (
        <View style={{flex:1,justifyContent:'center',}}>
<Text>Home</Text>
        </View>
    )
}

function AWay() {
    return (
        <View>
            <Text>Away</Text>
        </View>
    )
}
export const MenuItemRegistered=(props:
                                     {setIsRegister: (arg0: boolean) => void;
                                     setIsLogout: (arg0: boolean) => void;
                                     setIsItem: (arg0: boolean) => void;
                                     setIsMenu: (arg0: boolean) => void;
                                     setIsUser:(arg: boolean)=> void})=>{
    return(
        <View style={[styles.appBarContainerMenuItems]}>

            <ScrollView showsHorizontalScrollIndicator={false}
                        scrollEnabled={true} showsVerticalScrollIndicator={false}>

                <TouchableOpacity onPress={() => {
                    props.setIsLogout(true);
                    props.setIsItem(false);
                    props.setIsMenu(false);
                    props.setIsUser(false)
                    props.setIsRegister(false);
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
                        <FontAwesome size={16} name={'info-circle'} style={styles.appBarContainerMenuItemsIcon}/>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>About</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.appBarContainerMenuItemsIconTitle}>
                        <Text style={styles.appBarContainerMenuItemsIcon}/> <Text
                        style={styles.appBarContainerMenuItemsIconTitle}> </Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export const MenuItemUnregistered=(props: {isOk:boolean;setIsRegister: (arg0: boolean) => void;  setIsLogout: (arg0: boolean) => void; setIsItem: (arg0: boolean) => void; setIsMenu: (arg0: boolean) => void;setIsUser:(arg: boolean)=> void
    setIsSave:(arg0: boolean)=> void;
    setIsHome:(b: boolean)=> void;
})=>{
    const [isLogin,setIsLogin]=useState(false)
    return(
        <View style={[styles.appBarContainerMenuItems]}>

            {props.isOk? <ScrollView showsHorizontalScrollIndicator={false}
                        scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => {
                    props.setIsLogout(true);
                    //props.setIsItem(false);
                    props.setIsMenu(false);
                    props.setIsHome(true)
                    props.setIsSave(false);
                    //props.setIsRegister(true);

                }}>
                    <Text style={styles.appBarContainerMenuItemsIconTitle}>
                        <FontAwesome size={16} name={'sign-out'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                        style={styles.appBarContainerMenuItemsIconTitle}>Log in</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    props.setIsLogout(false);
                    //props.setIsItem(false);
                    props.setIsMenu(false);
                    props.setIsHome(true)
                    props.setIsSave(false);
                    props.setIsRegister(true);
                }}>
                    <Text style={styles.appBarContainerMenuItemsIconTitle}>
                        <FontAwesome size={16} name={'sign-out'} style={styles.appBarContainerMenuItemsIcon}/> <Text
                        style={styles.appBarContainerMenuItemsIconTitle}>Sign up</Text>
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
                        <FontAwesome size={16} name={'info-circle'} style={styles.appBarContainerMenuItemsIcon}/>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>About</Text>
                    </Text>
                </TouchableOpacity>

            </ScrollView>:

                <ScrollView showsHorizontalScrollIndicator={false}
                            scrollEnabled={true} showsVerticalScrollIndicator={false}>

                    <TouchableOpacity onPress={() => {
                        //props.setIsLogout(true);
                        //props.setIsItem(false);
                        //props.setIsMenu(false);
                        //props.setIsRegister(false);
                        //props.setIsUser(false)
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
                            <FontAwesome size={16} name={'info-circle'} style={styles.appBarContainerMenuItemsIcon}/>
                            <Text style={styles.appBarContainerMenuItemsIconTitle}>About</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.appBarContainerMenuItemsIconTitle}>
                            <Text style={styles.appBarContainerMenuItemsIcon}/> <Text
                            style={styles.appBarContainerMenuItemsIconTitle}> </Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            }
        </View>
    )
}

export var userModel:UserModel
export default function App() {

    const persistenceController=new PersistenceController('scheduler')
    userModel=new UserModel()
    const userController=new UserController(userModel);
    persistenceController.createTable();
    const [isMenu,setIsMenu]=useState(false);
    const {width,height}=Dimensions.get('screen')
    const  [isLogout,setIsLogout]=useState(false)
    const  [isRegister,setIsRegister]=useState(false)
    const  [isSave,setIsSave]=useState(true)
    const  [isUser,setIsUser]=useState(false)
    const  [isLogin,setIsLogin]=useState(false)
    const  [userData,setUserData]=useState({
        email: "",
        password: ""
    })
    const  [isHome,setIsHome]=useState(false)
    const  [isItems,setIsItem]=useState(true)
    const  [isProfile,setIsProfile]=useState(true)
    {/*
          <StatusBar  style={"dark"} backgroundColor={systemBar.backgroundColor}/>
          <View style={[styles.appBarContainerItems,styles.appBarContainer,{flex:0}]}>

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
                  console.log(modelFromCalenderItems.getTag())
                  persistenceController.createUser([
                      0,
                      modelFromCalenderItems.getFirstName(),
                      modelFromCalenderItems.getLastName(),
                      modelFromCalenderItems.getEmail(),
                      modelFromCalenderItems.getPassword(),
                      modelFromCalenderItems.getTag().toString(),
                      modelFromCalenderItems.getCellNumber(),
                      modelFromCalenderItems.getContact().toString(),
                      modelFromCalenderItems.getStart()+'',
                      modelFromCalenderItems.getEnd()+'',
                      modelFromCalenderItems.getMonth(),
                      modelFromCalenderItems.getDay(),
                      modelFromCalenderItems.getTask().toString(),
                      modelFromCalenderItems.getDayName(),
                      modelFromCalenderItems.getAddress().toString(),
                      modelFromCalenderItems.getTelephone(),
                      modelFromCalenderItems.getDate()+'',
                      modelFromCalenderItems.getLocation(),
                      modelFromCalenderItems.getLongitude(),
                      modelFromCalenderItems.getLatitude(),
                      modelFromCalenderItems.getLatitudeDelta(),
                      modelFromCalenderItems.getLongitudeDelta(),
                      modelFromCalenderItems.getIsActive(),
                      modelFromCalenderItems.getIsNotify()
                  ]);
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
          </View>

          <ScrollView style={[width !<=  540  ? { flex: 0}:{ flex: 0}]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
              <View style={{height:height-220}}>
                  <Text >Step One</Text>
                  <Text>
                      Edit App.js to change this screen and turn it
                      into your app.
                  </Text>
                  <Text>See Your Changes</Text>
                  <Text>
                      Press Cmd + R inside the simulator to reload
                      your app’s code.
                  </Text>
                  <Text >Debug</Text>
                  <Text>
                      Press Cmd + M or Shake your device to open the
                      React Native Debug Menu.
                  </Text>
                  <Text >Learn</Text>
                  <Text>
                      Read the docs to discover what to do next:
                  </Text>
                  <Text >Step One</Text>
                  <Text>
                      Edit App.js to change this screen and turn it
                      into your app.
                  </Text>
                  <Text>See Your Changes</Text>
                  <Text>
                      Press Cmd + R inside the simulator to reload
                      your app’s code.
                  </Text>
                  <Text >Debug</Text>
                  <Text>
                      Press Cmd + M or Shake your device to open the
                      React Native Debug Menu.
                  </Text>
                  <Text >Learn</Text>
                  <Text>
                      Read the docs to discover what to do next:
                  </Text>
                  <Text >Step One</Text>
                  <Text>
                      Edit App.js to change this screen and turn it
                      into your app.
                  </Text>
                  <Text>See Your Changes</Text>
                  <Text>
                      Press Cmd + R inside the simulator to reload
                      your app’s code.
                  </Text>
                  <Text >Debug</Text>
                  <Text>
                      Press Cmd + M or Shake your device to open the
                      React Native Debug Menu.
                  </Text>
                  <Text >Learn</Text>
                  <Text>
                      Read the docs to discover what to do next:
                  </Text>
                  <Text >Step One</Text>
                  <Text>
                      Edit App.js to change this screen and turn it
                      into your app.
                  </Text>
                  <Text>See Your Changes</Text>
                  <Text>
                      Press Cmd + R inside the simulator to reload
                      your app’s code.
                  </Text>
                  <Text >Debug</Text>
                  <Text>
                      Press Cmd + M or Shake your device to open the
                      React Native Debug Menu.
                  </Text>
                  <Text >Learn</Text>
                  <Text>
                      Read the docs to discover what to do next:
                  </Text>
                  <Text >Step One</Text>
                  <Text>
                      Edit App.js to change this screen and turn it
                      into your app.
                  </Text>
                  <Text>See Your Changes</Text>
                  <Text>
                      Press Cmd + R inside the simulator to reload
                      your app’s code.
                  </Text>
                  <Text >Debug</Text>
                  <Text>
                      Press Cmd + M or Shake your device to open the
                      React Native Debug Menu.
                  </Text>
                  <Text >Learn</Text>
                  <Text>
                      Read the docs to discover what to do next:
                  </Text>
                  <Text >Step One</Text>
                  <Text>
                      Edit App.js to change this screen and turn it
                      into your app.
                  </Text>
                  <Text>See Your Changes</Text>
                  <Text>
                      Press Cmd + R inside the simulator to reload
                      your app’s code.
                  </Text>
                  <Text >Debug</Text>
                  <Text>
                      Press Cmd + M or Shake your device to open the
                      React Native Debug Menu.
                  </Text>
                  <Text >Learn</Text>
                  <Text>
                      Read the docs to discover what to do next:
                  </Text>
              </View>

          </ScrollView>*/}
          {/*
          <View   style={{flex:1}}>

              {isLogout?
                  <DashboardMenuItems/>
                  :null}

             {isMenu? <View style={[styles.appBarContainerMenuItems]}>

              <ScrollView showsHorizontalScrollIndicator={false}
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
              </ScrollView>
          </View>:null}

               </View>*/}

               useEffect(()=>{
               userController.setEmail(userData.email)
                userController.setPassword(userData.password)

               })


//      {//{ 'hour': userModel.get, minutes: string }={hour: '', minutes: ''}}

    return (
         <View style={ {flex: 1,display:"flex"}}>
             <View style={styles.header}>


                 <View style={[styles.appBarContainerItems,styles.appBarContainer]}>

                     {isUser?<View style={styles.userActivities}>
                         <TouchableOpacity>
                             <FontAwesome style={styles.appBarIcon} name={'user-circle-o'} size={22} color={systemColor.color} />
                         </TouchableOpacity>

                     </View>:null}
                     {isUser?<View>
                         <TouchableOpacity>
                             <FontAwesome  style={[styles.appBarIcon,styles.appBarIconMessageAlertUser]} name={'user-circle-o'} size={14} color={systemColor.color} />

                         </TouchableOpacity>
                         <TouchableOpacity>
                             <FontAwesome style={styles.appBarIcon} name={'bell'} size={15} color={systemColor.color} />

                         </TouchableOpacity>
                     </View>:null}

                     {isSave? <TouchableOpacity onPress={()=>{

                         if(userModel.getPassword() && userModel.getEmail()){
                             persistenceController.auth([userModel.getEmail(),userModel.getPassword()],(rows => {

                                 if(rows.length==0){
                                     setIsSave(false)
                                     setIsLogout(false)
                                 }else {
                                     persistenceController.createTask([
                                         0,userModel.getEmail(),{
                                             'location':'',
                                             'longitude':'',
                                 'latitude': '',
                                 'longitudeDelta':'',
                                 'latitudeDelta': '',
                                 'email': userModel.getEmail(),
                                 'todayDate':modelFromCalenderItems.getTodayDate(),
                                 'start': modelFromCalenderItems.getStart(),
                                 'end': modelFromCalenderItems.getEnd(),
                                 'month':modelFromCalenderItems.getMonth(),
                                 'day':modelFromCalenderItems.getDay(),
                                 'dayName': modelFromCalenderItems.getDayName(),
                                 "date": { "date": modelFromCalenderItems.getDay(), "month": modelFromCalenderItems.getMonth(), "year": modelFromCalenderItems.getYear() }
                                         }
                                     ],(isOk,msg)=>{
                                       console.log(msg)
                                     });

                                    // setIsSave(true)
                                     //setIsLogout(true)
                                 }





                             }))

                         }else {
                             if(!isLogin){
                                 setIsSave(false)
                                 setIsHome(true)
                                 setIsLogout(true)
                             }

                         }


                     }}>
                         <Text style={[styles.appBarIcon,styles.save]}>
                             Save
                         </Text>
                     </TouchableOpacity>:null}
                     {isHome? <TouchableOpacity onPress={()=>{
                         //setIsSave(true)
                         setIsLogout(false)
                         setIsRegister(false);
                         setIsSave(true)
                         setIsHome(false)
                     }}>
                         <Text style={[styles.appBarIcon]}>
                             <FontAwesome size={30} style={[styles.appBarIcon]} name={'home'}/>
                         </Text>
                     </TouchableOpacity>:null}

                     <TouchableOpacity onPress={()=>{

                         !isMenu ? setIsMenu(true):setIsMenu(false)
                     }}>
                         <FontAwesome  size={24} style={[styles.appBarIcon,styles.bar]} name={'bars'} color={systemColor.color} />
                     </TouchableOpacity>
                 </View>
                 {isMenu? <MenuItemUnregistered isOk={!isUser} setIsRegister={setIsRegister} setIsLogout={setIsLogout} setIsItem={setIsItem} setIsMenu={setIsMenu}  setIsUser={setIsUser} setIsSave={setIsSave} setIsHome={setIsHome}/> :
                   null}
             </View>
             <View style={{flex:20}}>
                 <ScrollView style={styles.scrollViewStyle}>
                     {isLogout? <Auth callback={((isOk:boolean,userData:any)  => {

                      if(isOk){
                          setIsLogout(false)
                          setIsLogin(true)
                          setIsRegister(false)
                          setIsProfile(false)
                          setUserData(userData)
                          setIsSave(true)
                          setIsUser(true)
                          setIsHome(false)

                      }
                     })}  /> : isRegister ?<Register/>:<Dashboard/>}
                 </ScrollView>
             </View>

             <View style={styles.footer}>

             </View>
         </View>
  );

}



