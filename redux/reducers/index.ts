import { StatusMachine } from "./../api/statusMachine";
import { combineReducers } from "redux";
import { statusMachineReducer } from "./statusMachine";

export interface StoreState {
  statusMachineReducer: StatusMachine;
}

export const rootReducer = combineReducers<StoreState>({
  statusMachineReducer,
});
