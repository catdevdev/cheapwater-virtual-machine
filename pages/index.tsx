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
import QRCode from "../components/QRCode";
import WaterStatus from "../components/WaterStatus";

const Index = () => {
  return (
    <Container>
      <div className={c.firstRow}>
        <div className={c.firstColumn}>
          <div>
            <SectionBlock style={{ width: 220 }}>
              <div className={c.pourWaterBlock}>
                <Label>Pour water into a machine (local)</Label>
                <Button style={{ marginTop: 14 }}>Add</Button>
                <Button style={{ marginTop: 14 }}>Set</Button>
                <Input
                  placeholder="Enter water volume"
                  style={{ marginTop: 14 }}
                />
              </div>
            </SectionBlock>
            <SectionBlock style={{ width: 220, marginLeft: 14 }}>
              <div className={c.pourWaterBlock}>
                <Label>Set the amount of water on the server</Label>
                <Button style={{ marginTop: 14 }}>Add</Button>
                <Button style={{ marginTop: 14 }}>Set</Button>
                <Input
                  placeholder="Enter water volume"
                  style={{ marginTop: 14 }}
                />
              </div>
            </SectionBlock>
          </div>
          <div>
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
          </div>
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
