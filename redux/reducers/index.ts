/* types */
import { StatusMachine } from "./../api/statusMachine";
import { WaterStatus } from "./../api/waterStatus";
/* redux stuffs */
import { combineReducers } from "redux";
import { statusMachine } from "./statusMachine";
import { waterStatus } from "./waterStatus";

export interface StoreState {
  statusMachine: StatusMachine;
  waterStatus: WaterStatus;
}

export const rootReducer = combineReducers<StoreState>({
  statusMachine,
  waterStatus,
});
