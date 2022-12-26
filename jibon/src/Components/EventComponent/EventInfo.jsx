import impact_data from "../../testData/impactData.js";
import "./EventInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./EventInfo.scss";

const EventInfo = () => {
  return (
    <div className="section-gap">
      <div className="container">
        <div className="text-center cmb-50">
          <h3 className="custom-sub-title cmb-10">our all events</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>

        <div className="row g-4">
          {impact_data.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="cart">
                  <img
                    src={item.img}
                    className="img-fluid cart-img"
                    alt=""
                    style={{ height: "300px" }}
                  />
                  <div className="cart-body">
                    <h4 className="cart-title">{item.title}</h4>
                    <p className="cart-detail">{item.detail}</p>
                  </div>
                  <div className="cart-footer">
                    <Link to="/" className="custom-btn-sm-borderless">
                      view event detail
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        className="custom-icon cml-10"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
