import { WindowMachine } from "./../api/windowMachine";
import {
  GetWindowMachine,
  PutPlasticCup,
  RemovePlasticCup,
  AddWaterInToPlasticCup,
  AddWaterInToSplashContainer,
  ResetWaterInSplashContainer,
  Action,
} from "../actions/windowMachine/types";
export const windowMachine = (state: WindowMachine = {}, action: Action) => {
  switch (action.type) {
    case GetWindowMachine:
      return action.payload;
    case PutPlasticCup:
      return action.payload;
    case RemovePlasticCup:
      return action.payload;
    case AddWaterInToPlasticCup:
      return action.payload;
    case AddWaterInToSplashContainer:
      return action.payload;
    case ResetWaterInSplashContainer:
      return action.payload;
    default:
      return state;
  }
};
