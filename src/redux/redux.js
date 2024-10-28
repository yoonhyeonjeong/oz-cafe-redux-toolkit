import data from "../assets/data";
import {legacy_createStore} from "../../node_modules/redux/src/createStore";
import {combineReducers} from "redux";
// action 객체
export const addToCart = (options, quantity, id) => {
    return {
        type: "addToCart",
        payload: {options, quantity, id},
    };
};
export const removeFromCart = id => {
    return {
        type: "removeFromCart",
        payload: {id},
    };
};

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "addToCart":
            return [...state, action.payload];
        case "removeFromCart":
            return state.filter(el => action.payload.id !== el.id);
        default:
            return state;
    }
};
const menuReducer = (state = data.menu, action) => {
    return state;
};

const rootReducer = combineReducers({cartReducer, menuReducer});
export const store = legacy_createStore(rootReducer);
