/* import */
import axios from "./index";

export interface WindowMachine {
  inWindowCup: boolean;
  cupSize: number;
  amountOfWaterInCup: number;
  splosh: number;
}

export const patchStatusMachine = (status: StatusMachine) =>
  axios.patch<StatusMachine>("/statusMachine", status);

export const getStatusMachine = () =>
  axios.get<StatusMachine>("/statusMachine");
