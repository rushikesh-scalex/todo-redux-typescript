import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoFromList, editTodoFromList } from "../redux/Actions";
import "../Styles/SingleTodo.css";
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
    <form
      className="singleTodo"
      onSubmit={(e) => handleSubmit(e, id, editTodo)}
    >
      <div className="mainData">
        {edit ? (
          <>
            <input
              className="editTodoInput"
              autoFocus={true}
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
      </div>
      <div>
        <span>
          <i
            title="Edit"
            onClick={() => {
              setEdit(true);
            }}
            className="fa-solid fa-pen-to-square span_icons"
          ></i>
        </span>
        <span>
          <i
            title="Delete"
            onClick={() => dispatch(deleteTodoFromList(id))}
            className="fa fa-trash span_icons"
          ></i>
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
