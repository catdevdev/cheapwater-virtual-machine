/* import */
import axios from "./index";

export interface WindowMachine {
  inWindowCup?: boolean;
  cupSize?: number;
  amountOfWaterInCup?: number;
  splash?: number;
}

export const patchWindowMachine = (data: WindowMachine) =>
  axios.patch<WindowMachine>("/windowMachine", data);
  
export const getWindowMachine = () =>
  axios.get<WindowMachine>("/windowMachine");
