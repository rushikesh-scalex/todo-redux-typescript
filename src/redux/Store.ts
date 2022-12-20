import {createStore} from "redux";
import RootReducer from "./RootReducer";
const myStore = createStore(RootReducer);
export type RootState = ReturnType<typeof myStore.getState>

export default myStore;
