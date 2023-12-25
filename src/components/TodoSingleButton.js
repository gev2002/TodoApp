import React from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet} from "react-native";

function TodoSingleButton(props) {
    const {title,icon,onPress} = props
    return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image style={styles.icon} source={icon}/>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button:{
        width:90,
        height:80,
        backgroundColor:'#05243E',
        borderColor:'#21c9c9',
        borderRadius:10,
        justifyContent:'center',
        borderWidth:1,
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:18,
        textAlign:'center'
    },
    icon:{
    }
})
export default TodoSingleButton;
