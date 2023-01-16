import "../Maincontainer.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Download } from "react-bootstrap-icons";

const ProductDescription = () => {
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

      <div className="product-card row p-5">
        <div className="col-12 col-md-6 product-description ">
          <Card>
            <Card.Img variant="top" src="product1.png" />
            <Card.Body>
              <Card.Title>
                <a>English Departement</a>
              </Card.Title>
              <Card.Text>
                <h5>Best dental surgeons</h5>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <h6>
                  <Download />
                  &nbsp;&nbsp; 15 Sales
                </h6>
                <p style={{ fontSize: "15px" }}>
                  <label>$16.48</label> &nbsp;
                  <label>$6.48</label>
                </p>
                <Button>Learn More ></Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 product-description ">
          <Card>
            <Card.Img variant="top" src="product2.png" />
            <Card.Body>
              <Card.Title>
                <a>English Departement</a>
              </Card.Title>
              <Card.Text>
                <h5>Health Queries</h5>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <h6>
                  <Download />
                  &nbsp; &nbsp; 15 Sales
                </h6>
                <p style={{ fontSize: "15px" }}>
                  <label>$16.48</label> &nbsp;
                  <label>$6.48</label>
                </p>
                <Button>Learn More ></Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default ProductDescription;
