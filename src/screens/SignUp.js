import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import InputComponent from "../components/InputComponent";
import UserIcon from '../assets/images/icons/user.png'
import MailIcon from '../assets/images/icons/mail.png'
import LockIcon from '../assets/images/icons/lock.png'
import CheckMark from '../assets/images/icons/checkmark.png'
import ButtonComponent from "../components/ButtonComponent";
import ExternalButtons from "../components/ExternalButtons";
import {useNavigation} from "@react-navigation/native";



function SingUp(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex:1,paddingTop:100}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View style={styles.header}>
                    <Image source={CheckMark} style={styles.mainImg}/>
                    <Text style={styles.title}>Welcome Back to DO IT </Text>
                    <Text style={styles.text}>Have an other productive day !</Text>

                </View>
                <InputComponent placeholder={'Full Name'} icon={UserIcon} styleProp={{marginTop:-140}} styleInput={{marginTop:-135}}/>
                <InputComponent placeholder={'E-mail'} icon={MailIcon} styleProp={{marginTop:-68}} styleInput={{marginTop:-65}}/>
                <InputComponent placeholder={'Password'} icon={LockIcon} styleProp={{marginTop:-10}} styleInput={{marginTop:-5}}/>

                <View style={{flex:1}}>
                    <ButtonComponent title={'Sign Up'} />
                    <TouchableOpacity style={styles.buttonSign} onPress={()=>navigation.navigate("SignIn")} >
                        <Text style={styles.buttonBottomText}>
                            {"Already have an account?"}
                            <Text style={styles.buttonSignText}>
                                &nbsp;{"Sign In"}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <ExternalButtons signText={"Sign Up"}/>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        minWidth: 350,
        width:'100%',
        textAlign:'center',
        minHeight:800,
        height:'100%',
        flex:1,
        alignItems:'center',

    },

    title:{
        color:  '#ffffff',
        // fontFamily: Poppins,
        fontSize: 25,
        fontStyle: 'normal',
        textAlign:'center',

    },
    text:{
        color:  '#ffffff',
        // fontFamily: Poppins,
        fontSize: 16,
        fontStyle: 'normal',
        textAlign:'center',
        flexBasis:100
    },
    mainImg:{
        marginTop:-15,
        marginBottom:15,
        alignSelf:'center'
    },
    header:{
        marginTop:-40,
        textAlign:'center',
        gap:20,
        marginBottom:100

    },
    buttonSign:{
        marginTop:-45,
        marginBottom:45,
        alignItems:'center',

    },
    buttonBottomText:{
        marginTop:20,
        color:'#ffffff',
        textAlign:'center',
        fontSize:15,
        width:220,
        textDecorationLine:'underline'
    },
    buttonSignText:{
        color:'#63D9F3',
        marginTop:10,
        fontSize:13,
    },
})
export default SingUp;
