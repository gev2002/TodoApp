import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import CompletedIcon from "../assets/images/icons/complated-icon.png";

function TaskComponent(props) {
    const {completedIcon= '',title,text,arrow, lineHeight,isCompleted} = props

    return (
        <View style={[styles.task,completedIcon ? {paddingLeft:50}: {},lineHeight ? {marginTop:40} : {}]}>
            {completedIcon && <Image style={styles.completedIcon} source={completedIcon}/>}
            <View style={styles.titleView}>
                <Text style={styles.title}>{title}</Text>
                {isCompleted && <Image source={CompletedIcon} style={styles.taskIcon} />}
            </View>
            <Text style={styles.text}>{text}</Text>
            <Image style={styles.arrowRight} source={arrow}/>
        </View>
    );
}

const styles = StyleSheet.create({
    task:{
        marginTop:15,
        backgroundColor:'white',
        height:47,
        borderRadius:10,
        paddingTop:5,
        paddingLeft:20,
        marginBottom:5
    },
    title:{
        color:'black',
        fontSize:16,
        marginRight:20
    },
    text:{
        color:'black',
        fontSize:12
    },
    completedIcon:{
        position:'absolute',
        top:15,
        left:10
    },
    arrowRight:{
        position:'absolute',
        right:15,
        top:15,
        width:15,
        height:20
    },
    titleView:{
        flexDirection:'row'
    },
    taskIcon:{
        marginTop:2,
    }
})
export default TaskComponent;
