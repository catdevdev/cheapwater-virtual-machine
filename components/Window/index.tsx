/* imports */
import c from "./index.module.scss";
/* UI */
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";

const Window = () => {
  return (
    <SectionBlock style={{ width: "100%", marginTop: 14 }}>
      <div className={c.wrapperBlock3}>
        <div className={c.firstContainer}>
          <div className={c.imageContainer}>
            <div className={c.containerForImg}>
              <img
                className={`${c.imgCup} ${c.active}`}
                src="https://i.pinimg.com/originals/6e/16/b7/6e16b77a83e019fc90f87471a41a054f.gif"
                alt=""
              />
              200 ml
            </div>
            <div className={c.containerForImg}>
              <img
                className={c.imgCup}
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
              *In window <br /> nothing*
            </p>
          </div>
          <div className={c.missingWater}>
            <div className={c.fill}></div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default Window;
