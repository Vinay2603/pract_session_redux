import {ADD_COUNT} from "./actionType"

var init = {count:0}
export const reducer=(state= init, {type, payload })=>{
  switch(type){
    case ADD_COUNT:
        return  {
          ...state ,
           count : state.count + payload
          
       }

      default: 
        return state    
  }
}