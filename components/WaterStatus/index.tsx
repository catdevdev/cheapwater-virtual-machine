/* imports */
import { Spinner } from "reactstrap";
import c from "./index.module.scss";
import { useEffect, useState } from "react";
/* redux */
import { useSelector, useDispatch } from "react-redux";
import { getWaterInMachine } from "../../redux/actions/waterStatus";
/* redux types */
import { StoreState } from "../../redux/reducers";

const WaterStatus = () => {
  const [maxWaterBalance, setMaxWaterBalance] = useState(20000);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const waterQuantity = useSelector(
    (state: StoreState) => state.waterStatus.waterQuantity
  );

  useEffect(() => {
    dispatch(getWaterInMachine(() => setLoading(false)));
  }, []);

  return (
    <div className={c.wrapper}>
      <div className={c.waterBlock}>
        {loading && <Spinner color="primary" className={c.spinner} />}
        <div
          className={c.fill}
          style={{ height: (waterQuantity / maxWaterBalance) * 100 }}
        />
      </div>
      <p className={c.waterBalanceText}>{waterQuantity} ml</p>
    </div>
  );
};

export default WaterStatus;
