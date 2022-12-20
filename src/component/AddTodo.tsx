import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoToList } from "../redux/Actions";
import "../Styles/AddTodo.css"
const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) {
      alert("enter value");
      return;
    }
    dispatch(addTodoToList(input));
    setInput("");
  };
  return (
    <>
      
        <form className="mainDiv" onSubmit={(e) => handleSubmit(e)}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder=" 📝 Add todo..."
          />
          <i 
            onClick={(e) => handleSubmit(e)}
            title="Add to List"
            className="fa fa-plus btn-icons "
          ></i>
          <i
            className="fa fa-eraser btn-icons "
            title="Erase input"
            onClick={() => setInput("")}
          ></i>
        </form>
      
    </>
  );
};

export default AddTodo;
