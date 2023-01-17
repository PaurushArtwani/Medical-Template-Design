import "../Maincontainer.css";
import { BsTelephone, BsPinMapFill, BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="row footer-section p-5">
        <div className="col-12 col-md-2 col-sm-6 col-xs-6 footer-section-items">
          <h5>Company Info</h5>
          <div>
            <p>
              <a href="About Us">About Us</a>
            </p>
            <p>
              <a href="Carrier">Carrier</a>
            </p>
            <p>
              <a href="hiring">We are hiring </a>
            </p>
            <p>
              <a href="blog">Blog</a>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-2 col-sm-6 col-xs-6 footer-section-items">
          <h5>Legal</h5>
          <div>
            <p>
              <a href="About Us">About Us</a>
            </p>
            <p>
              <a href="Carrier">Carrier</a>
            </p>
            <p>
              <a href="hiring">We are hiring </a>
            </p>
            <p>
              <a href="blog">Blog</a>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-2 col-sm-6 col-xs-6 footer-section-items">
          <h5>Features</h5>
          <div>
            <p>
              <a href="About Us">Business Marketing</a>
            </p>
            <p>
              <a href="Carrier">User Analytic</a>
            </p>
            <p>
              <a href="hiring">Live Chat </a>
            </p>
            <p>
              <a href="blog">Unlimited Support</a>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-2 col-sm-6 col-xs-6 footer-section-items">
          <h5>Resources</h5>
          <div>
            <p>
              <a href="About Us">IOS & Android</a>
            </p>
            <p>
              <a href="Carrier">Watch a Demo</a>
            </p>
            <p>
              <a href="hiring">Customers </a>
            </p>
            <p>
              <a href="blog">Unlimited Support</a>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 footer-section-items">
          <h5>Get In touch</h5>

          <div className="get-in-touch">
            <p>
              <a href="About Us">
                <BsTelephone />
                &nbsp; (480) 555-0103
              </a>
            </p>
            <p>
              <a href="Carrier">
                <BsPinMapFill />
                &nbsp; 4517 Washington Ave. Manchester, Kentucky 39495
              </a>
            </p>
            <p>
              <a href="hiring">
                <BsFillEnvelopeFill />
                &nbsp; debra.holt@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
