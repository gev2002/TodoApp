import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text, Dimensions} from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import UserImg from '../assets/images/icons/user-img-test.png'
import {SwiperFlatList} from "react-native-swiper-flatlist";
import GroupImg from '../assets/images/icons/group.png'
import TaskComponent from "../components/TaskComponent";
import ArrowRight from '../assets/images/icons/arrow-right.png'
import CompletedIcon from '../assets/images/icons/complated-icon.png'
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {todosRequest} from "../store/actions/todo";


const {height} = Dimensions.get('screen')

function Home(props) {
    const [id,setId] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        setId(userData.id)
        dispatch(todosRequest(15))
    }, [id]);
    const navigation = useNavigation()
    const userData = useSelector(state => state.loginReducer.data)
    const data = [
        {day: 'Tomorrow', time: '10:30 pm', usersImg: GroupImg},
        {day: 'Thursday', time: '10:30 pm', usersImg: GroupImg},
        {day: 'Monday', time: '10:30 pm', usersImg: GroupImg},
        {day: 'Friday', time: '10:30 pm', usersImg: GroupImg},

    ]
    const todos = useSelector(state => state.todosReducer.todos || [])
    const inCompleteTodos = todos.filter(t => !t.completed).slice(0,2)
    const completedTodos = todos.filter(i => !!i.completed)
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex: 1, paddingTop: 30}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View style={styles.userInfo}>
                    <Image source={{uri:userData.image}} style={styles.userImg}/>
                    <View style={styles.userData}>
                        <Text style={styles.userName}>{userData.firstName + ' ' + userData.lastName}</Text>
                        <Text style={styles.userEmail}>{userData.email}</Text>
                    </View>

                </View>
                <View style={styles.groupTasks}>
                    <Text style={styles.groupText}>Group tasks</Text>
                    <Carousel
                        mode={'parallax'}
                        loop
                        width={width * 0.855}
                        height={width / 2}
                        style={styles.carousel}
                        data={data}
                        renderItem={({item}) => (
                            <View style={styles.block}>
                                <Image
                                    source={item.img}
                                    style={styles.img}
                                />
                                <Text style={styles.title}>Go to the gym</Text>
                                <Text style={styles.text}>{item.day} | {item.time}</Text>
                                <Image style={styles.groupImg} source={item.usersImg}/>
                            </View>
                        )}
                    />

                </View>
                <View style={styles.incomingTasks}>
                    <Text style={styles.groupText}>Incomplete Tasks</Text>
                    {inCompleteTodos.map(t=>(
                        <TouchableOpacity key={t.id} onPress={()=>navigation.navigate('TodoSingle',{todo:t})}>
                            <TaskComponent title={t.todo} text={"Tomorrow | 10:30pm"} arrow={ArrowRight}/>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.incomingTasks}>
                    <Text style={styles.groupText}>Completed Tasks</Text>
                    {completedTodos.map(t=>(
                        <TouchableOpacity key={t.id} onPress={()=>navigation.navigate('TodoSingle',{todo:t})}>
                            <TaskComponent completedIcon={CompletedIcon} completed={t.completed} title={t.todo} text={"Tomorrow | 10:30pm"}
                                           arrow={ArrowRight}/>
                        </TouchableOpacity>

                    ))}
                </View>
            </LinearGradient>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        flex: 1,
        minWidth:250,
        width:'100%',
        alignSelf: 'center',
        justifyContent:'center',
    },
    userInfo: {
        flexDirection: 'row',
        marginHorizontal: 10,

    },
    userImg: {
        width:50,
        height:50,
        borderRadius: 50,
        marginRight: 20,
        marginLeft: 10
    },
    userName: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        alignItems:'center'
    },
    userEmail: {
        color: 'white',
        fontSize: 16,

    },
    userData: {
        marginRight: 15,

    },
    bellImg: {
        position: 'absolute',
        right: 0,
        top: 10
    },
    groupTasks: {
        marginTop: 15,
        marginLeft: 15,
    },
    groupText: {
        color: 'white',
        fontSize: 20
    },
    block: {
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: 'white',
        height: 150,
        borderRadius: 10,
        width: 210,
        marginTop: 10,
    },
    carousel:{
        marginLeft:-15,
        width:'100%',
    },
    title: {
        fontSize: 18,
        color: 'black',

    },
    text: {
        fontSize: 12,
        color: 'black'
    },
    groupImg: {
        marginTop: 15,
        width: 130,
        height: 42
    },
    incomingTasks: {
        marginTop: 5,
        marginHorizontal:10
    }
})
export default Home;
