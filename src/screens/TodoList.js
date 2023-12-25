import React, {useCallback, useState} from 'react';
import {ScrollView,FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MagnifyingGlassIcon from '../assets/images/icons/magnifying-glass.png'
import TaskComponent from "../components/TaskComponent";
import ArrowRight from '../assets/images/icons/arrow-right.png'
import EllipseIcon from '../assets/images/icons/elipse.svg'
import PlusIcon from '../assets/images/icons/plus-icon.svg'
import CreateTaskModal from "../components/CreateTaskModal";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import _ from "lodash";
import SelectDropdown from 'react-native-select-dropdown'

function TodoList() {
    const [visible,setVisible] = useState(false)
    const [value,setValue] = useState('')
    // const [searchResult,setSearchResult] = useState([])
    const [sortedBy,setSortedBy] = useState([])
    const navigation = useNavigation()
    const todos = useSelector(state => state.todosReducer.todos || [])
    const handleSorting = useCallback((sort)=>{

        if (sort.toLowerCase() === 'not done'){
            console.log(sort,'nnnnn')
            const sorted = [...todos].sort((a, b)=>{
                if (a.completed === b.completed){
                    return 1
                }else if(!a.completed === b.completed){
                    return  0
                }else{
                    return -1
                }
            })
        }
        if (sort.toLowerCase() === 'done'){
            console.log(sort,'ddddd')
            const sorted = [...todos].sort((a, b)=>{
                if (a.completed === b.completed){
                    return 1

                }else if(!a.completed === b.completed){
                    return  0

                }else{
                    return -1
                }
            })
            console.log(sorted, 'not sort')
        }
    },[sortedBy])

    const searchResult = _.uniqBy(todos.filter((i) => (i?.todo?.trim().toLowerCase().indexOf(value?.toLowerCase()) > -1)), 'todo');
    console.log(searchResult,'value')
    // const handleSearch = useCallback((text)=>{
    //     console.log(value, 'valueeee')
    //     // const searchedTodos = todos.filter(e=> e.todo.toLowerCase().includes(value))
    //     setSearchResult(searchedTodos)
    // },[todos,searchResult,value])
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{flex: 1, paddingTop: 30}}
                colors={['#1253AA', '#05243E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View style={styles.inputView}>
                    <TextInput style={styles.input} value={value} onChangeText={(text)=> setValue(text)
                    }/>
                    <TouchableOpacity style={styles.magnifyIcon}>
                        <Image style={styles.img}  source={MagnifyingGlassIcon}/>
                    </TouchableOpacity>
                    <SelectDropdown
                        rowStyle={{width:90}}
                        defaultButtonText={"Sort By"}
                        buttonTextStyle={{color:'#fff',textAlign:'left'}}
                        rowTextStyle={{color:'#fff'}}
                        buttonStyle={{backgroundColor:"#05243E",marginLeft:10, borderRadius:15,width:90}}
                        dropdownStyle={{backgroundColor:"#05243E", borderRadius:15,width:90}}
                        data={['Done','Not Done']}
                        onSelect={(selectedItem) => handleSorting(selectedItem)}
                        />
                </View>
                {value && !_.isEmpty(searchResult) ?
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.searchView}>
                        {searchResult.map(elem=>(
                            <TouchableOpacity key={elem.id} onPress={()=> {
                            navigation.navigate("TodoSingle", {todo: elem})
                        }}>
                        <Text style={styles.searchTodo}>{elem.todo}</Text>
                          </TouchableOpacity>
                            ))}
                    </ScrollView> : null}


                    <Text style={styles.title}>Tasks List</Text>
                <View style={styles.taskView}>

                        <FlatList showsVerticalScrollIndicator={false}
                            style={styles.taskList}
                            keyExtractor={item => item.id}
                            renderItem={({item})=>(
                                <TouchableOpacity key={item.id} onPress={()=> {
                                    navigation.navigate("TodoSingle",{todo:item})
                                }}>
                                    <TaskComponent title={item.todo} text={"Tomorrow | 10:30pm"} isCompleted={item.completed}  arrow={ArrowRight} lineHeight/>
                                </TouchableOpacity>
                        )}
                            data={todos}
                        />

                    <TouchableOpacity style={styles.addIcon} onPress={()=>setVisible(true)}>
                        <EllipseIcon width={60} height={60}/>
                        <PlusIcon style={styles.plusIcon} width={25} height={25}/>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
            <CreateTaskModal visible={visible} onClose={()=>setVisible(false)}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        width: 400,
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center',
    },
    inputView:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:10
    },
    taskList:{
      marginHorizontal:30,
    },
    searchTodo:{
      color:'white',
        fontSize:18,
        lineHeight:30,

    },
    searchView:{
        width:250,
        height:80,
        top:75,
        left:20,
        paddingLeft:30,
        marginLeft:5,
        borderRadius:10,
        backgroundColor:'#102D53',
        position:'absolute',
        zIndex:3
    },
    input:{
        backgroundColor:'#102D53',
        width:250,
        borderRadius:10,
        marginLeft:10,
        paddingLeft:30,
        color:'#fff',
        fontSize:16
    },
    magnifyIcon:{
        position:'absolute',
        width:25,
        height:25,
        right:140,
        top:10
    },
    img:{
        width:25,
        height:25,
    },
    title:{
        color:'#fff',
        // fontFamily: 'Poppins';
        fontSize: 20,
        marginTop:30,
        marginLeft:30
    },

    addIcon:{
        marginTop:25,
        alignSelf:'center'
    },
    taskView:{
        height:480,

    },
    plusIcon:{
        position:'absolute',
        top:15,
        left:18
    }
})

export default TodoList;
