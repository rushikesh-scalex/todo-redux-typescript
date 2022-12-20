import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoFromList, editTodoFromList } from "../redux/Actions";
interface Props {
  id: number;
  data: string;
}

const SingleTodo: React.FC<Props> = ({ id, data }) => {
  // console.log(id,data);
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(data);
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent, id: number, editTodo: string) => {
    e.preventDefault();
    // console.log(id,editTodo);
    dispatch(editTodoFromList(id, editTodo));
    setEdit(false);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, id, editTodo)}>
      {edit ? (
        <>
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        </>
      ) : (
        <>
          <div>
            <span>{data} </span>
          </div>
        </>
      )}
      <span>
        {" "}
        <i
          onClick={() => dispatch(deleteTodoFromList(id))}
          className="fa fa-trash"
        ></i>{" "}
      </span>{" "}
      <span>
        {" "}
        <i
          onClick={() => {
            setEdit(true);
          }}
          className="fa-solid fa-pen-to-square"
        ></i>{" "}
      </span>
    </form>
  );
};

export default SingleTodo;
