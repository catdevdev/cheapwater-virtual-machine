/* imports */
import styled from "styled-components";
import classes from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label } from "reactstrap";
/* 1 */
import Container from "../components/UI/Container";
import SectionBlock from "../components/UI/SectionBlock";
import Button from "../components/UI/Button";

const Index = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SectionBlock>
            <Row xs="1">
              <Label>Pour water into a machine</Label>
            </Row>
            <Row>
              <Button>Add</Button>
            </Row>
            <Row>
              <Button>Set</Button>
            </Row>
          </SectionBlock>
          <SectionBlock>
            <Button>123</Button>
          </SectionBlock>
        </Col>
        <SectionBlock></SectionBlock>
      </Row>
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
