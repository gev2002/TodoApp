import React from 'react';
import {View, Image, Text, StyleSheet, useWindowDimensions, Dimensions, TouchableOpacity} from "react-native";
import {SwiperFlatList,} from "react-native-swiper-flatlist";
import NotepadImg from '../../assets/images/service/notepad.png'
import CalendarImg from "../../assets/images/service/calendar.png";
import TeamManagementImg from "../../assets/images/service/team-management.png";
import Shield from "../../assets/images/service/shield.png";
import ButtonBackground from '../../assets/images/icons/next_button.png'
import LinearGradient from "react-native-linear-gradient";
import DoneButton from '../../assets/images/icons/done_button.png'
import {useNavigation} from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel/src/Carousel";

function Welcome(props) {
    const navigation = useNavigation()
    const {width} = Dimensions.get('screen')
    const data = [
        {   id:1,
            img:NotepadImg,
            title:'Plan your tasks to do, that way you’ll stay organized and you won’t skip any',
        },
        {
            id:2,
            img:CalendarImg,
            title:'Make a full schedule for the whole week and stay organized and productive all days',

        },
        {
            id:3,
            img:TeamManagementImg,
            title:'Create a team task, invite people and manage your work together',
        },
        {
            id:4,
            img:Shield,
            title:'You information\'s are secure with us',
            buttonBackground:ButtonBackground,
            button:DoneButton

        },
    ]
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex:1,paddingTop:100}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <Carousel
                    mode={'stack'}
                    width={width}
                    height={'100%'}
                data={data}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.block}>
                        <Image
                            source={item.img}
                            style={styles.img}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        {item.buttonBackground && (
                            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SignIn")}>
                                <Image source={item.buttonBackground}/>
                                <Image source={item.button} style={styles.doneButton}/>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        minWidth: 350,
        textAlign:'center',
        flex:1,
        flexGrow:2
    },
    // scrollBlock: {
    //
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     bottom: 42,
    // },
    //
    // slide: {
    //     width: 12,
    //     height: 7,
    //     borderRadius: 8,
    //     marginHorizontal: 4,
    //     backgroundColor: '#D9D9D9',
    // },
    img:{
        height:270,
        marginTop:30,
        alignSelf:'center',
        width:265,

    },
    block:{
        flex:1
    },
    // scrollView: {
    //     width: 39,
    //     height: 7,
    //     borderRadius: 10,
    //     backgroundColor: 'white',
    // },
    title:{
        color: '#FFF',
        textAlign: "center",
        // fontFamily: 'Poppins',
        fontSize: 22,
        marginHorizontal:56,
        marginVertical:70,
        fontStyle: 'normal',
        // fontWeight: 500,
        lineHeight:30,
        width: 285,
        flex:1
    },
    button:{
        position:'relative',
        alignItems:'flex-end',
        marginRight:30,
    },
    doneButton:{
        // backgroundColor:'white',
        borderRadius:40,
        bottom:75,
        right:30,

    },

    carousel:{

    }
})
export default Welcome;
