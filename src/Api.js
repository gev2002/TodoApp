import axios from "axios";


const api = axios.create({
    baseURL:'https://dummyjson.com'
})
class Api {
    static login(data){
        console.log(data, 'dddddd')
        return api.post('/auth/login',data)
    }
    static getTodos(id){
        return api.get(`/todos/user/${+id}`)
    }

    static addTodo(form){
        return api.post('/todos/add',form)
    }
    static updateTodo(id){
        console.log(id,55)
        return api.put(`/todos/${id}`,{completed:true})
    }
    static deleteTodo(id){
        return api.delete(`/todos/${id}`)
    }
    static pinTodo(id){
        return api.put(`/todos/pin/${id}`)
    }
}


export default Api
