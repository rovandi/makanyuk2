import React, {useState, useRef} from 'react';
import {View,Text,StyleSheet, Dimensions,Image} from 'react-native'
import {colors, parameters} from "../../global/styles"
// import * as Animatable from 'react-native-animatable'
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper';



import { Icon, Button, SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'
import { title } from '../../global/styles';

export default function SignInWelcomeScreen({navigation}){
    return(

        <View style={{flex:1}}>
            <View style = {{flex:3, justifyContent:'flex-start', alignItems:'center', paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>

            <View style={{flex:4, justifyContent:'center'}}>
                <Swiper autoplay={true}>
                    <View style = {styles.slide1}>
                        <Image
                            source={{uri:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    <View style = {styles.slide2}>
                        <Image
                            source={{uri:"https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    <View style = {styles.slide3}>
                        <Image
                            source={{uri:"https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    <View style = {styles.slide3}>
                        <Image
                            source={{uri:"https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{flex:4, justifyContent:"flex-end", marginBottom:20}}>
                    
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title="SIGN-IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle} 

                        onPress = {()=>{
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

                <View style= {{ marginHorizontal:20, marginTop:20}}>
                    <Button
                        title="create an account"
                        buttonStyle={styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                    />
                </View>

            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#92BBD9'
    },

    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor: "#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor: colors.buttons
    },

    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }

})