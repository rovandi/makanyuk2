import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
// import Header from './src/components/Header'
import {colors} from './src/global/styles'
import SignInScreen from './src/screens/authScreens/SigninScreen'
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen'
import RootNavigator from './src/navigation/RootNavigator'

export default function App(){
  return(
    <View style = {styles.container}>

      <StatusBar barStyle="light-content" backgroundColor = {colors.statusbar}/>
      {/* <Header title= "MY ACCOUNT" type= "arrow-left" />   */}
{/* 
      <SignInScreen/> */}
{/* 
      <SignInWelcomeScreen/> */}

      <RootNavigator/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})