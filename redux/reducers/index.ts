import { StatusMachine } from "./../api/statusMachine";
import { combineReducers } from "redux";
import { statusMachine } from "./statusMachine";

export interface StoreState {
  statusMachine: StatusMachine;
}

export const rootReducer = combineReducers<StoreState>({
  statusMachine,
});
