import React from 'react';
import {Image, StyleSheet, View, Text} from "react-native";
import Modal from 'react-native-modal'
import CheckMarkPopup from '../assets/images/icons/checkmark_popup.png'
function PopUpModal(props) {
    const {visible,onClose} = props
    return (
        <View style={styles.container}>
            <Modal

                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
                isVisible={visible}
                onBackButtonPress={onClose}
                onModalHide={onClose}
                onBackdropPress={onClose}

            >
                <View style={styles.popUp}>
                    <Image style={styles.checkmark} source={CheckMarkPopup}/>
                    <Text style={styles.title}>Your account  has been created successfully</Text>
                    <Text style={styles.text}>You gonna receive a verification code in your email</Text>

                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#000000',
        opacity:0.9
    },
    popUp:{
        alignItems:'center',
        height: 227,
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginHorizontal:8

    },
    checkmark:{
        marginHorizontal:100
    },
    title:{
        color:'#000000',
        fontSize:20,
        textAlign:'center'
    },
    text:{
        color:'#000000',
        marginTop:10,
        fontSize:13,
        textAlign:'center'
    }
})
export default PopUpModal;
