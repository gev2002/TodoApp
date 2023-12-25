import {
    GET_TODOS_FULFILLED,
    GET_TODOS_PENDING,
    GET_TODOS_REJECTED,
} from "../actions/todos";

const initialState = {
    todos: [],
    dataStatus: "",
    error: "",
};

export function getTodosReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS_PENDING: {
            return {
                ...state,
                dataStatus: "Loading",
            };
        }
        case GET_TODOS_FULFILLED: {
            return {
                ...state,
                dataStatus: "Wow !!!",
                carData: action.payload.data,
            };
        }
        case GET_TODOS_REJECTED: {
            return {
                ...state,
                dataStatus: "fail",
                error: action.payload.error,
            };
        }
        default: {
            return {...state};
        }
    }
}
