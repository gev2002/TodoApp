import React, {useCallback, useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PopUpModal from "./PopUpModal";

function ButtonComponent(props) {
    const {title,onSubmit,load} = props
    const [visible,setVisible] = useState(false)
    return (
        <View style={styles.container}>
            {load ? <ActivityIndicator style={styles.indicator}/> : null}
            <TouchableOpacity disabled={load}  style={[styles.button]} onPress={onSubmit}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </TouchableOpacity>
        <PopUpModal visible={visible} onClose={()=>setVisible(false)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        backgroundColor: '#0EA5E9',
        minWidth: '100%',
        maxWidth:310,
        height: 42,
        marginTop:50,
        marginBottom:50

    },
    buttonText:{
        color: '#FFFFFF',
        flex:1,
        textAlignVertical:'center',
        textAlign:'center',
        width:310,
        // fontFamily: 'Poppins';
        fontSize: 18,
        // font-style: normal;
        // font-weight: 500;
        // line-height: normal;
        // letter-spacing: 1.62px;
    },

    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1/1.5
    },
    indicator:{
        zIndex:5,
        position:'absolute',
        top:60,

    }
})


export default ButtonComponent;
