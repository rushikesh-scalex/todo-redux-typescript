import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import SingleTodo from "./SingleTodo";
import "../Styles/List.css"

const List = () => {
  const { list } = useSelector((state: RootState) => state.todoReducer);
  // console.log(list);

  const display = list.map((ele) => {
    const { id, data } = ele;
    return <SingleTodo key={id} id={id} data={data} />;
  });
  return (
    <>
      <div className="mainList">{display}</div>
    </>
  );
};

export default List;
