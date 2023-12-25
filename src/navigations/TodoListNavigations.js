import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TodoList from "../screens/TodoList";
import TodoSingle from "../screens/TodoSingle";

const Stack = createNativeStackNavigator()
function TodoListNavigations(props) {
    return (
        <Stack.Navigator initialRouteName={"TodoList"}>
            <Stack.Screen options={{
                headerShown:false
            }} name={"TodoList"} component={TodoList}/>
            <Stack.Screen name={"TodoSingle"} component={TodoSingle}/>
        </Stack.Navigator>
    );
}

export default TodoListNavigations;
