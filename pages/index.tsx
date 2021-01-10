/* imports */
import styled from "styled-components";
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import Container from "../components/UI/Container";
import SectionBlock from "../components/UI/SectionBlock";
import Button from "../components/UI/Button";
/* componets */
import PourWater from "../components/PourWater";
import QRCode from "../components/QRCode";
import WaterStatus from "../components/WaterStatus";
import Window from "../components/Window";

const Index = () => {
  return (
    <Container>
      <div className={c.firstRow}>
        <div className={c.firstColumn}>
          <PourWater />
          <Window />
        </div>
        <div style={{ marginLeft: 30 }} className={c.secondColumn}>
          <QRCode />
        </div>
        <div style={{ marginLeft: 30 }} className={c.thirdColumn}>
          <WaterStatus />
        </div>
      </div>
    </Container>
  );
};

export default Index;

// const Index = () => {
//   return (
//     <Container>
//       <div className={classes.firstContainer}>
//         <div className={classes.section1}>
//           <div className={classes.wrapper1}>
//             <SectionBlock>
//               <Button>123</Button>
//             </SectionBlock>
//             <SectionBlock></SectionBlock>
//           </div>
//         </div>
//         <div className={classes.section2}></div>
//         <div className={classes.section3}></div>
//       </div>
//     </Container>
//   );
// };

// export default Index;
