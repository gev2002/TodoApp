import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ArrowLeft from "../../assets/images/icons/arrow-left.svg";
import {useNavigation, useRoute} from "@react-navigation/native";
import TaskSvg from "../../assets/images/icons/todoListIcons/complate-vector.svg";
import TimeSvg from "../../assets/images/icons/todoListIcons/time-vector.svg";
import CalendarSvg from "../../assets/images/icons/todoListIcons/calendar-vector.svg";
import TodoSingleButton from "../../components/TodoSingleButton";
import DoneIcon from '../../assets/images/icons/todoSingleIcons/check-icon.png'
import TrashIcon from '../../assets/images/icons/todoSingleIcons/trash-icon.png'
import PinIcon from '../../assets/images/icons/todoSingleIcons/pin-icon.png'
import {useDispatch} from "react-redux";
import {deleteTodo, doneTodo, pinTodo} from "../../store/actions/todos";

function TodoSingle() {
    const navigation = useNavigation()
    const {params= {}}= useRoute()
    const {todo = {}} = params
    const dispatch = useDispatch()
    const handleDone = useCallback((id)=>{
        dispatch(doneTodo(id))
    },[todo])

    const handleDelete= useCallback((id)=>{
        dispatch(deleteTodo(id))
        navigation.navigate('TodoList')

    },[todo])

    const handlePin = useCallback((id)=>{
        dispatch(pinTodo(id))
    },[todo])

    useEffect(() => {
        navigation.setOptions({
            headerLeft:() => <TouchableOpacity onPress={()=>{
                navigation.goBack()
                navigation.reset({
                    index: 0,
                    routes: [{name: 'TodoListNavigation'}],
                });

            }} style={styles.arrowLeft}><ArrowLeft width={18} height={18}/></TouchableOpacity>,
            headerStyle: {
                backgroundColor:'#1253AA',
            },
            headerTitleAlign:'center',
            headerTintColor:'white'
        })
    }, []);
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex: 1, paddingTop: 30}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{todo.task}  </Text>
                        {todo.isDone &&  <TaskSvg style={styles.taskIcon} width={20} fill={'white'} height={20}/>}
                    </View>
                    <View style={styles.dateText}>
                            <CalendarSvg
                                fill={'white'}
                                width={20}
                                height={20}
                            />
                            <Text style={styles.timeText}> {todo.day}  |  </Text>
                        <TimeSvg
                            fill={'white'}
                            width={20}
                            height={20}
                        /><Text style={styles.timeText}> {todo.time}</Text></View>
                    <Text style={styles.desc}>
                        {todo.description}
                    </Text>
                    <View style={styles.buttonsView}>
                        <TodoSingleButton onPress={()=>handleDone(todo.id)} title={todo.isDone ? "Undone" : "Done"} icon={DoneIcon}/>
                        <TodoSingleButton onPress={()=>handleDelete(todo.id)} title={"Delete"} icon={TrashIcon}/>
                        <TodoSingleButton onPress={()=>handlePin(todo.id)} title={todo.isPin ? 'Unpin' : "Pin"} icon={PinIcon}/>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center',
    },
    arrowLeft:{
        marginLeft:15,
        width:35,
        height:35,
        backgroundColor:'white',
        borderRadius:50,
        paddingTop:8,
        paddingLeft:7
    },
    buttonsView:{
        flexDirection:'row',
        width:320,
        justifyContent:'space-between',
        marginHorizontal:40,
        marginTop:60
    },
    title:{
        color:'#fff',
        fontSize:26,
        marginLeft:30
    },
    dateText:{
        marginTop:10,
        marginLeft:33,
        fontSize:22,
        color:'white',
        flexDirection:'row'
    },
    desc:{
        borderTopColor:'rgba(255,255,255,0.44)',
        borderTopWidth:1,
        paddingTop:35,
        color:'white',
        fontSize:18,
        marginLeft:33,
        marginTop:60,
        width:330
    },
    taskIcon:{
        // position:'absolute',
        // top:40,
        // right:20,
        marginLeft:15,
        marginTop:5
    },
    titleView:{
        flexDirection:'row',
        marginTop:30,

    },
    timeText:{
        color:'#fff',
    }
})
export default TodoSingle;
