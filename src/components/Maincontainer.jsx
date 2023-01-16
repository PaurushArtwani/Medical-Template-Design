import { Col, Container, Row } from "react-bootstrap";
import Navbarsection from "./Header-Section/Navbarsection";
import Herosection from "./Header-Section/Herosection";
import Maincontent from "./Imperssions-Section/Maincontent";
import Ourdepartment from "./Department-Section/Ourdepartment";
import ProductDescription from "./Product-Section/ProductDescription";
import Clientdescription from "./Client-Section/Clientdescription";
import Faqdescription from "./FAQ-Section/Faqdescription";
import Subscribe from "./Subscribe-Section/Subscribe";
import Footer from "./Footer-Section/Footer";
import Socialmedia from "./Footer-Section/Socialmedia";

const Maincontainer = () => {
  return (
    <>
      <Navbarsection></Navbarsection>

      <Container fluid style={{ height: "99vh", backgroundColor: "#26335D" }}>
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
