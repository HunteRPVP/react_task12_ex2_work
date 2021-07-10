import { createStore } from "redux";
import { rootReducer } from "./Counter";

export const store = createStore(rootReducer);