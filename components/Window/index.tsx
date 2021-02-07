/* imports */
import c from "./index.module.scss";
import { useState, useEffect } from "react";
/* UI */
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";
/* redux */
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux/reducers";
import {
  getWindowMachineObject,
  putPlasticCup,
  removePlasticCup,
  addWaterInToPlasticCup,
  addWaterInToSplashContainer,
  resetWaterInSplashContainer,
} from "../../redux/actions/windowMachine";

const Window = () => {
  const [selectedСup200, setSelectedСup200] = useState(false);
  const [selectedСup400, setSelectedСup400] = useState(true);

  const dispatch = useDispatch();

  const inWindowCup = useSelector(
    (state: StoreState) => state.windowMachine.inWindowCup
  );
  const cupSize = useSelector(
    (state: StoreState) => state.windowMachine.cupSize
  );
  const amountOfWaterInCup = useSelector(
    (state: StoreState) => state.windowMachine.amountOfWaterInCup
  );
  const splash = useSelector((state: StoreState) => state.windowMachine.splash);

  useEffect(() => {
    dispatch(getWindowMachineObject());
  }, []);

  return (
    <SectionBlock style={{ width: "100%", marginTop: 14 }}>
      <div className={c.wrapperBlock3}>
        <div className={c.firstContainer}>
          <div className={c.imageContainer}>
            <div className={c.containerForImg}>
              <img
                onClick={() => {
                  setSelectedСup200(true);
                  setSelectedСup400(false);
                }}
                className={`${c.imgCup} ${selectedСup200 ? c.active : ""}`}
                src="https://i.pinimg.com/originals/6e/16/b7/6e16b77a83e019fc90f87471a41a054f.gif"
                alt=""
              />
              200 ml
            </div>
            <div className={c.containerForImg}>
              <img
                onClick={() => {
                  setSelectedСup200(false);
                  setSelectedСup400(true);
                }}
                className={`${c.imgCup} ${selectedСup400 ? c.active : ""}`}
                src="https://data.whicdn.com/images/343543056/original.jpg"
                alt=""
              />
              400 ml
            </div>
          </div>
          <Button
            onClick={() => {
              {
                inWindowCup
                  ? dispatch(removePlasticCup())
                  : dispatch(putPlasticCup(selectedСup200 ? 200 : 400));
              }
            }}
            style={{ width: "100%" }}
          >
            {inWindowCup ? "Remove plastic cup" : "Put plastic cup"}
          </Button>
        </div>
        <div className={c.secondContainer}>
          <div className={c.window}>
            <p className={c.message}>
              {inWindowCup ? (
                <div className={c.containerForImg}>
                  <img
                    onClick={() => {
                      setSelectedСup200(false);
                      setSelectedСup400(true);
                    }}
                    className={`${c.imgCupInWindow}`}
                    src={
                      cupSize === 200
                        ? "https://i.pinimg.com/originals/6e/16/b7/6e16b77a83e019fc90f87471a41a054f.gif"
                        : "https://data.whicdn.com/images/343543056/original.jpg"
                    }
                    alt="cup"
                  />
                  <div
                    style={{
                      height: `${(amountOfWaterInCup * 100) / cupSize}%`,
                    }}
                    className={c.fill}
                  />
                </div>
              ) : (
                <>
                  In window <br /> nothing*
                </>
              )}
            </p>
          </div>
          <div
            onClick={() => {
              dispatch(resetWaterInSplashContainer());
            }}
            className={c.missingWater}
          >
            <div style={{ height: `${splash}%` }} className={c.fill} />
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default Window;
