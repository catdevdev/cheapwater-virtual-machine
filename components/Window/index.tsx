/* imports */
import c from "./index.module.scss";
import { useState } from "react";
/* UI */
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";

const Window = () => {
  const [selectedСup200, setSelectedСup200] = useState(false);
  const [selectedСup400, setSelectedСup400] = useState(true);
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
          <Button style={{ width: "100%" }}>Put plastic cup</Button>
        </div>
        <div className={c.secondContainer}>
          <div className={c.window}>
            <p className={c.message}>
              {/* *In window <br /> nothing* */}
              <div className={c.containerForImg}>
                <img
                  onClick={() => {
                    setSelectedСup200(false);
                    setSelectedСup400(true);
                  }}
                  className={`${c.imgCupInWindow}`}
                  src="https://data.whicdn.com/images/343543056/original.jpg"
                  alt=""
                />
                <div className={c.fill}></div>
              </div>
            </p>
          </div>
          <div className={c.missingWater}>
            <div className={c.fill} />
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default Window;
