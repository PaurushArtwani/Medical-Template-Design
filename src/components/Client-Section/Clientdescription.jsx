import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Clientdescription = () => {
  return (
    <>
      <div className="p-3 main-content">
        <h6>Practise Advice</h6>
        <h2>Each and every client is important.</h2>
        <p>
          Problems trying to resolve the conflict between
          <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="row client-description text-center p-5">
        <div className="col-12 col-md-6 client-description-items">
          <Card className="p-4">
            <Card.Img variant="top" src="client1.png" />
            <Card.Body>
              <Card.Text>
                Slate helps you see
                <br /> how many more days
                <br /> you need to work to
                <br /> reach your financial <br />
                goal for the month <br />
                and year.
              </Card.Text>
              <div>
                <img src="star.png" />
              </div>
              <h5>Regina Miles</h5>
              <h6>Designer</h6>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 client-description-items text-center">
          <Card className="p-4">
            <Card.Img variant="top" src="client2.png" />
            <Card.Body>
              <Card.Text>
                Slate helps you see
                <br /> how many more days
                <br /> you need to work to
                <br /> reach your financial <br />
                goal for the month <br />
                and year.
              </Card.Text>
              <div>
                <img src="star.png" />
              </div>
              <h5>Regina Miles</h5>
              <h6>Designer</h6>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Clientdescription;
