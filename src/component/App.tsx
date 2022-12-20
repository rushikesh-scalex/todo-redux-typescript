import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import List from "./List";
import { RootState } from "../redux/Store";
import { useDispatch } from "react-redux";
import { removeAllTodos } from "../redux/Actions";
import Header from "./Header";
import ListHeader from "./ListHeader";
import "../Styles/List.css"
const App = () => {
  const { list } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <AddTodo />
      {list.length>0? <ListHeader/>: null}
      <List />
      {list.length > 0 ? (
        <div className="deleteBtn">
          <button  onClick={() => dispatch(removeAllTodos())}>Delete All</button>
        </div>
      ) : null}
    </>
  );
};

export default App;
