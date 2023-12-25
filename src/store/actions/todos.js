export const GET_TODOS_PENDING = 'GET_CARS_PENDING';
export const GET_TODOS_FULFILLED = 'GET_CARS_FULFILLED';
export const GET_TODOS_REJECTED = 'GET_CARS_REJECTED';


export default function getTodos() {
    return (dispatch) => {
        try {
            dispatch({
                type: GET_TODOS_PENDING,
                payload: {},
            });
            dispatch({
                type: GET_TODOS_FULFILLED,
                payload: { },
            });
        } catch (er) {
            dispatch({
                type: GET_TODOS_REJECTED,
                payload: { error: "Error"},
            });
        }
    };
}


