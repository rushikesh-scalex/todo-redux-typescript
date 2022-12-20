import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import List from "./List";
import { RootState } from "../redux/Store";
import { useDispatch } from "react-redux";
import { removeAllTodos } from "../redux/Actions";
const App = () => {
  const {list} = useSelector((state:RootState)=>state.todoReducer);
  const dispatch = useDispatch();
  return (
    <>
      <AddTodo />
      <List/>
      {list.length > 0 ? 
      <button onClick={()=>dispatch(removeAllTodos())}
      >Delete All</button> : null}
    </>
  );
};

export default App;
