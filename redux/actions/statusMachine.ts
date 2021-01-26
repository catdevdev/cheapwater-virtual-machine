import axios from "axios";
import { Dispatch } from "redux";
import { statusMachinePatch } from "./../api/statusMachine";

export const turnOnMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await statusMachinePatch();
    dispatch({
      type: "turnOnMachine",
      payload: response.data,
    });
  };
};
