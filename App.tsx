import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView} from 'react-native';
import { styles, systemBar} from "./src/styles/style";
import {Dashboard} from "./src/views/Dashboard";
import { FooterBar } from "./src/views/Footer";
import { AppBar } from "./src/views/Header";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" animated={true} backgroundColor={systemBar.backgroundColor}/>
        <AppBar/>
      <Dashboard/>
      <FooterBar/>
    </SafeAreaView>
  );
}


