import { ADD_TODO, DELETE_TODO, EDIT_TODO, REMOVE_ALL } from "./Action_Types";
import UniqueID from "../Utils/UniqueID";

export const addTodoToList = (data: string) => {
  return {
    type: ADD_TODO,
    payload: {
      id: UniqueID(),
      data: data,
    },
  };
};
export const deleteTodoFromList = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const removeAllTodos = () => {
  return {
    type: REMOVE_ALL,
  };
};
export const editTodoFromList = (id: number, data: string) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
      data: data,
    },
  };
};
