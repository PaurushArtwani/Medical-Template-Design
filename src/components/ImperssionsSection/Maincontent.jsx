import "../Maincontainer.css";
import Card from "react-bootstrap/Card";
const Maincontent = () => {
  return (
    <>
      <div className="p-3 main-content">
        <h6>Practise Advice</h6>
        <h2>See Our Impressions</h2>
        <p>
          Problems trying to resolve the conflict between
          <br /> the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="row p-5 card-section ">
        <div className="col-md-4 card-sectin-items">
          <Card>
            <Card.Body>
              <Card.Title>
                <h5>Emergency Case</h5>
              </Card.Title>
              <hr />
              <Card.Text>
                <p>The gradual accumulation and small-scale..</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className=" col-md-4 card-sectin-items">
          <Card>
            <Card.Body>
              <Card.Title>
                <h5>Quick examination</h5>
              </Card.Title>
              <hr />
              <Card.Text>
                <p>The gradual accumulation and small-scale..</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Maincontent;
