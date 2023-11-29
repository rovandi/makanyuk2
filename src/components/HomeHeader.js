import React from 'react'

import { View, Text, StyleSheet } from "react-native"
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'

export default function HomeHeader(){

    const BadgeIcon = withBadge(0)(Icon)

    return (

        <View style = {styles.header}>

            <View style={{alignItems:"center", justifyContent:'center', marginLeft:10}}>
                <Icon
                    type="material-community"
                    name="menu"
                    color = {colors.Cardbackground}
                    size = {32}
                />
            </View>

            <View style = {{alignItems:"center", justifyContent:"center"}}>
                <Text style={{color:colors.Cardbackground, fontSize:25, fontWeight:'bold'}}>Makanyuk</Text>
            </View>

            <View style = {{alignItems:"center", justifyContent:"center", marginRight:10}}>
                <BadgeIcon
                    type = "material-community"
                    name = "cart"
                    size = {30}
                    color = {colors.Cardbackground}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent:'space-between'
    }
})