import {ADD_COUNT} from "./actionType"


export const addCount =(data)=>{
  return{
    type: ADD_COUNT,
    payload : data,
  }
}

