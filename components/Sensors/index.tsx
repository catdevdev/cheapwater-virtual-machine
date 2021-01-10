/* imports */
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import Container from "../../components/UI/Container";
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";

/* components */
import Sensor from "./Sensor";
import WaterCounter from "./WaterCounter";

const Sensors = () => {
  return (
    <div className={c.container}>
      <SectionBlock>
        <div className={c.inner}>
          <div className={c.wrapper1}>
            <Sensor
              name="Obstacle sensor"
              imgSrc="https://i.pinimg.com/originals/67/2e/80/672e80d4a4a54fe7bc4a1bdb51286531.jpg"
            ></Sensor>
            <Sensor
              name="Rain sensor"
              imgSrc="https://geekculture.co/wp-content/uploads/2020/08/free-anime-on-animelog-youtube-channel-black-jack.jpg"
            ></Sensor>
            <Sensor
              name="Vibration Sensor"
              imgSrc="https://i.pinimg.com/originals/15/b3/12/15b3125aeae577611bd3296381d3ea58.gif"
            ></Sensor>
            <Sensor
              name="Montion Sensor"
              imgSrc="https://images6.fanpop.com/image/photos/43200000/Tenki-no-Ko-tenki-no-ko-43285018-300-216.gif"
            ></Sensor>
          </div>
          <div className={c.wrapper2}>
            <WaterCounter></WaterCounter>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default Sensors;
