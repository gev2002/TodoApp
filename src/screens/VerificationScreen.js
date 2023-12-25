import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import VerificationPopUp from "../components/services/VerificationPopUp";

function VerificationScreen(props) {
    const [visible,setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex:1,paddingTop:100}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
            <Text style={styles.title}>Verify account</Text>
                <View style={styles.block}>
                    <Text style={styles.title}>DO IT</Text>
                    <Text style={styles.text}>
                        By verifying your account, you data will be secured and be default you are accepting our terms and policies
                    </Text>
                    <TextInput style={styles.input} placeholderTextColor={'rgba(0, 0, 0, 0.44)'} placeholder={'Verification code'}/>
                    <TouchableOpacity style={styles.verifyButton} onPress={()=>setVisible(true)}>
                        <Text style={styles.titleVerify}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                    <VerificationPopUp visible={visible} onClose={()=>setVisible(false)}/>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        minWidth: 350,
        width:'100%',
        textAlign:'center',
        flex:1,
        alignSelf:'center',
    },
    title:{
        fontSize:32,
        color:'rgba(255,255,255,0.79)',
        textAlign:'center',
    },
    block:{
        paddingTop:30,
        backgroundColor:'rgba(167,197,239,0.47)',
        marginTop:40,
        width:320,
        height:450,
        alignSelf:'center',
        borderRadius:10
    },
    text:{
        fontSize:20,
        marginTop:50,
        marginHorizontal:20
    },
    input:{
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:50,
        fontSize:20,
        marginTop:60,
        paddingLeft:35
    },
    verifyButton:{
        marginHorizontal:50,
        marginTop:20,
        height:50,
        backgroundColor:'#0EA5E9',
        borderRadius:10
    },
    titleVerify:{
        fontSize:24,
        color:'#ffffff',
        textAlign:'center',
        marginTop:5
    }
})
export default VerificationScreen;
