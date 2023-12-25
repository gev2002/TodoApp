import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Calendar} from 'react-native-calendars';

function CalendarScreen(props) {
    const [date,setDate] = useState('')
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex:1,paddingTop:100}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
            <Calendar style={styles.calendarStyle} onDayPress={e=> setDate(e.dateString)}/>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Set task for {date}</Text>
                    <View style={styles.inputAndSubmitView}>
                        <TextInput style={styles.input} />
                        <TouchableOpacity>
                            <Text style={styles.submitButton}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        width:'100%',
        textAlign:'center',
        alignItems:'center',
        flex:1,
    },
    calendarStyle:{
        backgroundColor:'rgba(107,231,231,0.38)',
        borderRadius:10,
        width:330,
        marginHorizontal:30,
        opacity:0.9
    },
    inputView:{
        marginTop:40,
        borderRadius:10,
        marginHorizontal:10,
        backgroundColor:'#fff',
        height:100,
        paddingHorizontal:10,
        alignSelf:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        marginTop:10,
        marginBottom:5

    },
    input:{
        backgroundColor:'#05243E',
        borderRadius:5,
        width:250,
        color:'white',
        paddingLeft:30
    },
    submitButton:{
        width:60,
        backgroundColor:'#17A1FA',
        height:50,
        borderRadius:5,
        textAlign:'center',
        color:'white',
        paddingVertical:15,
        marginLeft:5
    },
    inputAndSubmitView:{
        flexDirection:'row'
    }
})
export default CalendarScreen;
