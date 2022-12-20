import { ADD_TODO, DELETE_TODO, EDIT_TODO, REMOVE_ALL } from "./Action_Types";
interface ITodo {
  id: number;
  data: string;
}

export interface ITodoState {
  list: ITodo[];
}
const initialState = {
  list: [],
};

export const todoReducer = (state: ITodoState = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      const { data, id } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case DELETE_TODO:
      const newList = state.list.filter(
        (element) => element.id !== action.payload);
      return {
        ...state,
        list: newList,
      };
    case REMOVE_ALL : 
        return {
          ...state,
          list : []
        }
    case EDIT_TODO :
      let editID = (action.payload.id); 
      let editData = action.payload.data;
      //todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      let updatedList = state.list.map((item)=>(item.id===editID?{...item,data:editData}:item))
      return {
        ...state,
        list: updatedList
      }
    default:
      return state;
  }
};
