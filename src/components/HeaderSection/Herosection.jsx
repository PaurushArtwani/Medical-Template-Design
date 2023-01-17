import { Button } from "react-bootstrap";
import "../Maincontainer.css";

const Herosection = () => {
  return (
    <div className="row hero-section p-5">
      <div className="col-12 col-md-6 hero-section-join">
        <div className="container description-join ">
          <p className="">Join us</p>
          <h1 className="">
            A Great Place to <br />
            Receive Care
          </h1>
          <div>
            <h4 className="py-2">
              DentalCare is most focused in <br />
              helping you discover your most
              <br />
              beauiful smile
            </h4>
          </div>
        </div>

        <div className="join-learn-button">
          <Button>Join Us</Button>&nbsp;&nbsp;
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="col-12 col-md-6 doctor-logo">
        <img src="hero-image.png" />
      </div>
    </div>
  );
};
export default Herosection;
