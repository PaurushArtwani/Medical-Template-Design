import { CaretRightFill } from "react-bootstrap-icons";
import "../Maincontainer.css";

const Ourdepartment = () => {
  return (
    <div className="row department p-5">
      <div className="col-12 col-md-6 department-items-doctor">
        <img src="technology.png" />
      </div>
      <div className="col-12 col-md-6 p-5 department-items">
        <hr />
        <h2 className="p-3">Our Department</h2>
        <p className="p-3">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <h6 className="p-3">
          <a href="#" style={{ color: "red", textDecoration: "none" }}>
            Learn More
            <label style={{ fontSize: "20px" }}>
              <CaretRightFill />
            </label>
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Ourdepartment;
