/* imports */
import { Dispatch } from "redux";
/* api */
import { getWaterStatus } from "../../api/waterStatus";
/* types */
import {
  GetWaterInMachine,
  AddWaterInMachine,
  SetWaterInMachine,
} from "./types";
import { WaterStatus } from "../../api/waterStatus";

export interface GetWaterInMachineAction {
  type: typeof GetWaterInMachine;
  payload: WaterStatus;
}
// export interface SetWaterInMachineAction {
//   type: ActionTypes.SetWaterInMachine;
//   payload: WaterStatus;
// }
// export interface AddWaterInMachineAction {
//   type: ActionTypes.AddWaterInMachine;
//   payload: WaterStatus;
// }

export const getWaterInMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await getWaterStatus();
    dispatch<GetWaterInMachineAction>({
      type: GetWaterInMachine,
      payload: response.data,
    });
  };
};

// export const setWaterInMachine = () => {
//   return async (dispatch: Dispatch) => {
//     const response = await getStatusMachine();
//     dispatch<SetWaterInMachineAction>({
//       type: ActionTypes.SetWaterInMachine,
//       payload: response.data,
//     });
//   };
// };
