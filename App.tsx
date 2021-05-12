import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Auth } from "./src/views/Auth";
import { styles, systemBar, systemColor } from "./src/styles/style";
import { AppBar } from "./src/views/Header";
import { FontAwesome } from "@expo/vector-icons";
import { modelFromCalenderItems } from "./src/views/Content";
import { PersistenceModel } from "./src/models/PersistenceModel";
import { PersistenceController } from "./src/controllers/PersistenceController";
import { DashboardMenuItems } from "./src/views/DashboardMenu";
import { FooterBar } from "./src/views/Footer";

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

export default function App() {

    const persistenceModel=new  PersistenceModel();
    const persistenceController=new PersistenceController(persistenceModel);
    persistenceController.createTable();
    const [isMenu,setIsMenu]=useState(false);
    const {width,height}=Dimensions.get('screen')
    const  [isLogout,setIsLogout]=useState(true)
    const  [isItems,setIsItem]=useState(true)

  return (

      <View style={[{  flex: 1,
          padding: 0,}, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column"
      }]}>
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


          {/*     <View style={{flex:1}}>

                  <View style={[styles.appBarContainerItems,styles.appBarContainer]}>

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
          </View>
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

               </View>
             <ScrollView>
              {isLogout?
                  <DashboardMenuItems/>
                  :null}
             </ScrollView>
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
          <View>

          </View>*/}
          <View style={{ flex: 1, backgroundColor: "red" }} >
              <Text>holo</Text>
          </View>
          <View style={{ flex: 12}} >
              {isLogout?
                  <DashboardMenuItems/>
                  :null}
          </View>
          <View style={{ flex: 1, backgroundColor: "red" }} >
              <Text>holo</Text>
          </View>

      </View>








  );
}


