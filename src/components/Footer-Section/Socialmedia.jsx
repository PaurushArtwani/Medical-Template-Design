import "../Maincontainer.css";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Socialmedia = () => {
  return (
    <div className="row social-media">
      <div className="col-12 col-md-7 social-media-items p-3">
        <div>
          <span>Made With Love By Figmaland All Right Reserved </span>
        </div>
      </div>

      <div className="col-12 col-md-5 social-media-items p-3">
        <div className="social-media-logos">
          <BsFacebook className="facebook" />

          <BsInstagram className="instagram" />
          <BsTwitter className="twitter" />
        </div>
      </div>
    </div>
  );
};
export default Socialmedia;
