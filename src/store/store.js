import {createStore} from "redux"
import {reducer as todoReducer } from "../features/Todos/reducer"
//import {reducer as CounterReducer } from "../features/Counter/reducer"


export const store = createStore( todoReducer )