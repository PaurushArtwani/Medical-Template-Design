import { Col, Container, Row } from "react-bootstrap";
import "./Maincontainer.css";
import Navbarsection from "./HeaderSection/Navbarsection";
import Herosection from "./HeaderSection/Herosection";
import Maincontent from "./ImperssionsSection/Maincontent";
import Ourdepartment from "./DepartmentSection/Ourdepartment";
import ProductDescription from "./ProductSection/ProductDescription";
import Clientdescription from "./ClientSection/Clientdescription";
import Faqdescription from "./FAQSection/Faqdescription";
import Subscribe from "./SubscribeSection/Subscribe";
import Footer from "./FooterSection/Footer";
import Socialmedia from "./FooterSection/Socialmedia";

const Maincontainer = () => {
  return (
    <>
      <Container fluid>
        <Container>
          <Navbarsection></Navbarsection>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Herosection />
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Container>
          <Row>
            <Col>
              <Maincontent></Maincontent>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Container>
          <Row>
            <Col>
              <Ourdepartment></Ourdepartment>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Container>
          <Row>
            <Col>
              <ProductDescription></ProductDescription>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Container>
          <Row>
            <Col>
              <Clientdescription></Clientdescription>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Container>
          <Row>
            <Col>
              <Faqdescription></Faqdescription>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#26335D" }}>
        <Container>
          <Row>
            <Col>
              <Subscribe></Subscribe>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Row>
            <Col>
              <Footer></Footer>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid style={{ backgroundColor: "#FAFAFA" }}>
        <Container>
          <Row>
            <Col>
              <Socialmedia></Socialmedia>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Maincontainer;
