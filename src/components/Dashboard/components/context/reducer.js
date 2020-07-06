import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state,action) => {
    //actions(is an object) have a lot of things including type
    switch (action.type) {
        case ADD_TODO:
            return[...state, action.payload]
            //payload consists of some info,like a baggage to 
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}