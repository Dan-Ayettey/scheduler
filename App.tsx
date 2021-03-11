import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Auth } from "./src/views/Auth";
import { styles, systemBar, systemColor } from "./src/styles/style";
import { AppBar } from "./src/views/Header";
import { FontAwesome } from "@expo/vector-icons";
import { modelFromCalenderItems } from "./src/views/Content";
import { PersistenceModel } from "./src/models/PersistenceModel";
import { PersistenceController } from "./src/controllers/PersistenceController";
import { DashboardMenuItems } from "./src/views/DashboardMenu";
import { FooterBar } from "./src/views/Footer";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from "expo/build/removed.web";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab=createBottomTabNavigator();

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
    const [isMenu,setIsMenu]=useState(true);
    const  [isLogout,setIsLogout]=useState(true)
    const  [isItems,setIsItem]=useState(true)

  return (



      <View style={{flex: 1}}>

          <StatusBar  style={"light"} backgroundColor={systemBar.backgroundColor}/>

          <View style={{flex: 2}}>
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

              <ScrollView style={{flex: 7}}>
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
          </View>

          <View style={{flex: 0}}>
              <FooterBar/>
          </View>
      </View>








  );
}


