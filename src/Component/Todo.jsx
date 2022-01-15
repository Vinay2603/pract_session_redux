import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoError, addTodoLoading, addTodoSuccess } from "../features/Todos/action";
const axios = require('axios');

export const Todo = () => {
  const [text, setText] = useState("");
  const Todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  return (
    <>
      <h1>Todo </h1>
      <input value={text} type="text"
      onChange={(e)=>setText(e.target.value)}   
         placeholder="Enter Tasks" />
      <button
       onClick={()=>{
           dispatch(addTodoLoading())

        axios.post('http://localhost:3001/todos', {
          status:false ,
          title: text
        })
        .then(function (response) {

          dispatch(addTodoSuccess(response.data))
          console.log(response.data);
        })
        .catch(function (error) {
          dispatch(addTodoError(error))
          console.log(error);
        });




         
       }}
       > ADD</button>
      {Todos.map((e)=>(<div>{e}</div>))}
    </>
  );
};
