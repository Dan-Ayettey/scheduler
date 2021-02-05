import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Auth } from "./src/views/Auth";
import { systemBar } from "./src/styles/style";


export default function App() {
  return (




              <View style={{flex: 1}}>
                  <StatusBar style={"light"} backgroundColor={systemBar.backgroundColor}/>
                 <Auth/>
              </View>







  );
}


