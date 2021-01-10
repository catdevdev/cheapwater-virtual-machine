/* imports */
import c from "./index.module.scss";
/* UI */
import ConsoleOutput from "../../UI/ConsoleOutput";

const WaterCounter = () => {
  return (
    <div className={c.container}>
      <div className={c.row1}>
        <p className={c.nameSensor}>Water Counter</p>
        <img
          className={c.img}
          src="https://data.whicdn.com/images/325457976/original.jpg"
          alt=""
        />
      </div>
      <div className={c.row2}>
        <ConsoleOutput style={{ height: "auto" }}></ConsoleOutput>
      </div>
    </div>
  );
};

export default WaterCounter;
