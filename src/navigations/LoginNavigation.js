import React from 'react';
import {Image, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import CalendarScreen from "../screens/CalendarScreen";
import Settings from "../screens/Settings";
import ActiveTabIcon from '../assets/images/icons/navigationIcons/active-tab.png'
import HomeIcon from '../assets/images/icons/navigationIcons/home.png'
import HomeIconActive from '../assets/images/icons/navigationIcons/home-active.png'
import TodoListIcon from '../assets/images/icons/navigationIcons/todo-list.png'
import TodoListIconActive from '../assets/images/icons/navigationIcons/todo-list-active.png'
import CalendarIcon from '../assets/images/icons/navigationIcons/calendar.png'
import CalendarIconActive from '../assets/images/icons/navigationIcons/calendar-active.png'
import SettingsIcon from '../assets/images/icons/navigationIcons/settings.png'
import TodoListNavigations from "./TodoListNavigations";
const Tab = createBottomTabNavigator()

function LoginNavigation(props) {
    return (
        <Tab.Navigator  screenOptions={{
            headerShown:false,
            tabBarStyle : {
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0)',
            },
        }}>
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon:(p)=>(<View><Image source={p.focused ? HomeIconActive : HomeIcon} />{p.focused && <Image style={{marginLeft:12.5}} source={ActiveTabIcon}/>}</View>),
                    tabBarShowLabel:false
                }}
            />
            <Tab.Screen
                name={'TodoListNavigation'}
                component={TodoListNavigations}
                options={{
                    tabBarIcon:(p)=>(<View><Image source={p.focused ? TodoListIconActive : TodoListIcon}   />{p.focused && <Image style={{marginLeft:13.5}} source={ActiveTabIcon}/>}</View>),
                    tabBarShowLabel:false
                }}
            />
            <Tab.Screen
                name={'CalendarScreen'}
                component={CalendarScreen}
                options={{
                    tabBarIcon:(p)=>(<View><Image source={p.focused ? CalendarIconActive :CalendarIcon}   />{p.focused && <Image style={{marginLeft:11.5}} source={ActiveTabIcon}/>}</View>),
                    tabBarShowLabel:false

                }}
            />
            <Tab.Screen
                name={'Settings'}
                component={Settings}
                options={{
                    headerShown:true,
                    headerTitleAlign:'center',
                    tabBarIcon:(p)=>(<Image source={SettingsIcon}  fill={p.color} />),
                    tabBarShowLabel:false,

                }}
            />
        </Tab.Navigator>
    );
}


export default LoginNavigation;
