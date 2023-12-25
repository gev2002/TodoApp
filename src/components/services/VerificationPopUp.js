import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Modal from 'react-native-modal'
import CheckMarkPopup from '../../assets/images/icons/checkmark_popup.png'

function VerificationPopUp(props) {
    const {visible,onClose} = props
    return (
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
                    <Text style={styles.text}>example2023@gmail.com is verified</Text>
                </View>
            </Modal>
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
        flex:1/3.5,
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginHorizontal:18

    },
    checkmark:{
        alignSelf:'center'
    },
    text:{
        color:'#000000',
        marginTop:40,
        fontSize:16,
        textAlign:'center'
    }
})
export default VerificationPopUp;
