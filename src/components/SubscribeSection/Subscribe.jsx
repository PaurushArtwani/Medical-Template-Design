import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../Maincontainer.css";
const Subscribe = () => {
  return (
    <>
      <div className="p-5 main-content ">
        <h6>Newsletter</h6>
        <h2>JOIN US</h2>
        <p>
          Problems trying to resolve the conflict between
          <br /> the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="subcribe">
        <InputGroup className="mb-3">
          <Form.Control placeholder="Your Email" />
          <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
        </InputGroup>
      </div>
    </>
  );
};

export default Subscribe;
