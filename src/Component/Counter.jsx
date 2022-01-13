import { useDispatch, useSelector } from "react-redux"
import { addCount } from "../features/Counter/action"


export const Counter =()=>{

  const counter = useSelector((state)=> state.count)
   const dispatch = useDispatch()
 
 return <>
    <h1>COUNTER : {counter} </h1>
    <button 
    onClick={()=>{
       dispatch(addCount(1))
    }}
    >ADD 1 </button>
     
    </>
  
}