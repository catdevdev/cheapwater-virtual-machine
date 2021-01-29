import axios from "./index";

export interface WaterStatus {
  turnedOn: boolean;
}

export const patchStatusMachine = (status: StatusMachine) =>
  axios.patch<WaterStatus>("/statusMachine", status);

export const getStatusMachine = () =>
  axios.get<WaterStatus>("/statusMachine");
