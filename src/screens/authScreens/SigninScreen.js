import React, {useState, useRef} from 'react';
import {View,Text,StyleSheet, Dimensions,TextInput} from 'react-native'
import {colors, parameters} from "../../global/styles"
// import * as Animatable from 'react-native-animatable'
import * as Animatable from 'react-native-animatable'


import { Icon, Button, SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'
import { title } from '../../global/styles';

export default function SignInScreen({navigation}){

    const[textInput2Focussed,setTextInput2Focussed] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return(
        <View style={styles.contianer}>
            <Header title= "MY ACCOUNT" type= "arrow-left" navigation ={navigation}/>  
            <View>
                <Text style = {title}>Sign-In</Text>
            </View>

            <View style= {{alignItems:"center", marginTop:10}}>
                <Text style={styles.text1}>Please enter eamil and Password</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>

            <View>
                <View style = {{marginTop:20}}>
                    <TextInput
                        style = {styles.textInput1}
                        placeholder= "Email"
                        ref={textInput1}
                    />
                </View>

            <View style= {styles.textInput2}>
                <Animatable.View animation={textInput2Focussed?"":"fadeInLeft"} duration={400}>
                    <Icon
                        name='lock'
                        iconStyle={{color:colors.grey3}}
                        type = "material"
                    />
                </Animatable.View>

                <TextInput  
                         style = {{width:"80%"}}           
                        placeholder= "Password"
                        ref={textInput2}
                        onFocus =  {()=>{
                            setTextInput2Focussed(false)
                        }}
                        onBlur = {()=>{
                            setTextInput2Focussed(true)
                        }}
                />

                <Animatable.View animation={textInput2Focussed?"":"fadeInLeft"} duration={400}>
                <Icon
                        name='visibility-off'
                        iconStyle={{color:colors.grey3}}
                        type = "material"
                        style={{marginRight:10}}
                    />
                </Animatable.View>

            </View>    

            </View>

            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button
                    title="SIGN-IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}

                        onPress = {()=>{
                            navigation.navigate("HomeScreen")
                        }}

                />
            </View>
            
            <View style= {{alignItems:"center", marginTop:15}}>
                <Text style = {{...styles.text1, textDecorationLine: "underline"}}>Forgot Password ?</Text>
            </View>

            <View style = {{alignItems:"center", marginTop:20, marginBottom:5}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>OR</Text>
            </View>

            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title="Sign In with Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress = {()=> {}}
                />
            </View>        

             <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title="Sign In with Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress = {()=> {}}
                />
            </View>    

             <View style= {{ marginTop:25,marginLeft:20}}>
                <Text style = {{...styles.text1}}>New on Makanyuk ?</Text>
            </View>     

            <View style= {{alignItems:"flex-end", marginHorizontal:20, marginTop:10}}>
                <Button
                    title="create an account"
                    buttonStyle={styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    contianer : {
        flex:1,
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },

    textInput1:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:16
    },
    textInput2:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:16
    },

    SocialIcon: {
        borderRadius:12,
        height:50
    },

    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor: "#ff8c52",
        height:40,
        paddingHorizontal:20,
    },

    createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})

