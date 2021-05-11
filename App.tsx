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
    const  [isLogout,setIsLogout]=useState(true)
    const  [isItems,setIsItem]=useState(true)

  return (



      <View>

          <StatusBar  style={"dark"} backgroundColor={systemBar.backgroundColor}/>

          <View>
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

          <Text>
             
              <View>

              </View>
          </Text>
          <View>
              <FooterBar/>
          </View>
      </View>








  );
}


