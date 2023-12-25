import React, { useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
        fontSize: 18,
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
