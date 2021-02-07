/* types */
import { StatusMachine } from "./../api/statusMachine";
import { WaterStatus } from "./../api/waterStatus";
import { WindowMachine } from "./../api/windowMachine";
/* redux stuffs */
import { combineReducers } from "redux";
/* reducers */
import { statusMachine } from "./statusMachine";
import { waterStatus } from "./waterStatus";
import { windowMachine } from "./windowMachine";

export interface StoreState {
  statusMachine: StatusMachine;
  waterStatus: WaterStatus;
  windowMachine: WindowMachine;
}

export const rootReducer = combineReducers<StoreState>({
  statusMachine,
  waterStatus,
  windowMachine,
});
