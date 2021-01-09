/* imports */
import c from "./index.module.scss";

const WaterStatus = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.waterBlock}>
        <div className={c.fill} />
      </div>
      <p className={c.waterBalanceText}>17500 ml</p>
    </div>
  );
};

export default WaterStatus;
