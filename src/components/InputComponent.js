import React from 'react';
import { Image, StyleSheet, TextInput, View} from "react-native";
function InputComponent(props) {
    const {icon,placeholder,styleProp,styleInput,value,onChange} = props
    console.log(value,'value')
    return (
        <View style={styles.container}>
            <Image source={icon} style={[styles.icon,styleProp]}/>
            <TextInput placeholderTextColor={'rgba(0, 0, 0, 0.44)'} style={[styles.input,styleInput]} placeholder={placeholder} value={value} onChangeText={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        width: 400,
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center'
    },
    input:{
        width: 300,
        paddingLeft:36,
        height: 42,
        borderRadius:5,
        color:'black',
        backgroundColor:"#FFFFFF",
    },
    icon:{
        position:'absolute',
        zIndex:1,
        top:15,
        left:60,
        backgroundColor:'white',

    }
})
export default InputComponent;
