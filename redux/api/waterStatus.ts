import axios from "./index";

export interface WaterStatus {
  waterQuantity: number;
}

export const patchWaterStatus = (waterQuantity: WaterStatus) =>
  axios.patch<WaterStatus>("/waterStatus", waterQuantity);

export const getWaterStatus = () => axios.get<WaterStatus>("/waterStatus");
